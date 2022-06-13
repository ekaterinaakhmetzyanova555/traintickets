import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import TicketSearchForm from "./forms/ticketSearchForm/TicketSearchForm";
import {usePopper} from "react-popper";
function App() {

  const boxRef = useRef();
  const tooltipRef = useRef();

  const {styles, attributes} = usePopper(boxRef.current, tooltipRef.current);

  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>
              <TicketSearchForm/>
            </div>
          </header>
        </div>
  );
}

export default App;
