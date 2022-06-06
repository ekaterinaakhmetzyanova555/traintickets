export const RESET_STORE = "RESET_STORE";

export const resetStore = () => ({
  type: RESET_STORE,
});

export const rootReducer = (appReducer) => (state, action) => {
  let tempState = state;
  if (action.type === RESET_STORE) {
    tempState = undefined;
  }

  return appReducer(tempState, action);
};

export default function configureStore(initialState = {}) {
  const epicMiddleware = createEpicMiddleware();

  // NOTE Please keep the reducers ordered alphabetically as it makes it easier to look through in redux-dev-tools
  const appReducer = combineReducers({
    ticketSearchForm: ticketSearchReducer,
  });

  const getUID = () => ({ uid: uuidv4() });
  const thunkWithUID = thunk.withExtraArgument({ getUID });
  const store = createStore(
    rootReducer(appReducer),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        webSocketMiddleWare,
        thunkWithUID,
        epicMiddleware,
        // NOTE LogRocket should be the final middleware
        window.traintickets.LogRocket.reduxMiddleware(),
      ),
    ),
  );

  const epic$ = new BehaviorSubject(
    combineEpics(
    ),
  );

  // Asynchronous epic adding pattern from https://redux-observable.js.org/docs/recipes/AddingNewEpicsAsynchronously.html
  const rootEpic = (action$, state$) =>
    epic$.pipe(mergeMap((epic) => epic(action$, state$)));

  epicMiddleware.run(rootEpic);

  if (window.Cypress) {
    window.store = store;
    window.epic$ = epic$;
  }

  return store;
}
