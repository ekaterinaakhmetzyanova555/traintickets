import {Body, HeaderContainer, StyledDialogActions} from "./ticketFormStyles";
import {selectLoading} from "./ticketFormSelectors";
import {useSelector} from "react-redux";
import {FormProvider, useForm} from "react-hook-form"


export default function TicketSearchForm(props) {
    const formMethods = useForm();
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
