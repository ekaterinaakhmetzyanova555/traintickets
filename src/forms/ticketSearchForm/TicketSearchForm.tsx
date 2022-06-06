import { HeaderContainer, StyledDialogActions } from "./ticketFormStyles";
import {selectLoading} from "./ticketFormSelectors";
import {useSelector} from "react-redux";
import { FormProvider } from "react-advanced-form"


export default function TicketSearchForm(props) {

    const isLoading = useSelector(selectLoading);

    return (
        <>
            <HeaderContainer>

            </HeaderContainer>
            <Body>
                {(isLoading) && <Loading />}
                <FormProvider {...formMethods}>

                </FormProvider>
            </Body>
            <StyledDialogActions>
            </StyledDialogActions>
        </>
    )
}
