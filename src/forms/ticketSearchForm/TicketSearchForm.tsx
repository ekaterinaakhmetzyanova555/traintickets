import {useForm} from "react-hook-form"
import {Container, Switch} from "@mui/material";
import {DatesSearchWrap, SectionWrap, SwitchItemWrap, TicketSearch, TicketSearchBackground} from "./ticketFormStyles";

import { ReactComponent as CoupeSvg } from '../../_assets/searchTicketsFormIcons/coupe.svg'
import { ReactComponent as PlatzkartSvg } from '../../_assets/searchTicketsFormIcons/platzkart.svg'
import { ReactComponent as SeatplaceSvg } from '../../_assets/searchTicketsFormIcons/seatplace.svg'
import { ReactComponent as LuxeSvg } from '../../_assets/searchTicketsFormIcons/luxe.svg'
import { ReactComponent as WifiSvg } from '../../_assets/searchTicketsFormIcons/wifi.svg'
import { ReactComponent as ExpressSvg } from '../../_assets/searchTicketsFormIcons/express.svg'
import DoubleSlider from "../../_common/components/CustomDoubleSlider";

// @ts-ignore
export default function TicketSearchForm() {
    const formMethods = useForm();

    return (
        <TicketSearch>
            <Container>
                <form
                    noValidate
                    id="ticket-search-form">
                    <TicketSearchBackground>
                        <SectionWrap>
                            <DatesSearchWrap>
                                <div>Дата поездки</div>
                                <input type={"date"} name="date_start"/>
                            </DatesSearchWrap>
                            <DatesSearchWrap>
                                <div>Дата возвращения</div>
                                <input type={"date"} name="date_return"/>
                            </DatesSearchWrap>
                        </SectionWrap>
                        <SectionWrap>
                            <SwitchItemWrap>
                                <span className={"svg-item"}>
                                    <CoupeSvg width="18px" height="18px"/>
                                </span>
                                <span className={"font-search-panel"}>Купе</span>
                                <span className={"switcher"}>
                                    <Switch color="warning"/>
                                </span>
                            </SwitchItemWrap>
                            <SwitchItemWrap>
                                <span className={"svg-item"}>
                                    <PlatzkartSvg width="18px" height="18px"/>
                                </span>
                                <span className={"font-search-panel"}>Плацкарт</span>
                                <span className={"switcher"}>
                                    <Switch color="warning"/>
                                </span>
                            </SwitchItemWrap>
                            <SwitchItemWrap>
                                <span className={"svg-item"}>
                                    <SeatplaceSvg width="18px" height="18px"/>
                                </span>
                                <span className={"font-search-panel"}>Сидячий</span>
                                <span className={"switcher"}>
                                    <Switch color="warning"/>
                                </span>
                            </SwitchItemWrap>
                            <SwitchItemWrap>
                                <span className={"svg-item"}>
                                    <LuxeSvg width="18px" height="18px"/>
                                </span>
                                <span className={"font-search-panel"}>Люкс</span>
                                <span className={"switcher"}>
                                    <Switch color="warning"/>
                                </span>
                            </SwitchItemWrap>
                            <SwitchItemWrap>
                                <span className={"svg-item"}>
                                    <WifiSvg width="18px" height="18px"/>
                                </span>
                                <span className={"font-search-panel"}>Wi-Fi</span>
                                <span className={"switcher"}>
                                    <Switch color="warning"/>
                                </span>
                            </SwitchItemWrap>
                            <SwitchItemWrap>
                                <span className={"svg-item"}>
                                    <ExpressSvg width="18px" height="18px"/>
                                </span>
                                <span className={"font-search-panel"}>Экспресс</span>
                                <span className={"switcher"}>
                                    <Switch color="warning"/>
                                </span>
                            </SwitchItemWrap>
                        </SectionWrap>
                        <SectionWrap>
                            <span>Стоимость</span>
                            <DoubleSlider min={333} max={1555}/>
                        </SectionWrap>
                        <SectionWrap>
                            <span>Туда</span>
                            <div>
                                <span>Время отбытия</span>
                                <DoubleSlider min={0} max={24}/>
                            </div>
                            <div>
                                <span>Время прибытия</span>
                                <DoubleSlider min={0} max={24}/>
                            </div>
                        </SectionWrap>
                        <SectionWrap>
                            <span>Обратно</span>
                            <div>
                                <span>Время отбытия</span>
                                <DoubleSlider min={0} max={24}/>
                            </div>
                            <div>
                                <span>Время прибытия</span>
                                <DoubleSlider min={0} max={24}/>
                            </div>
                        </SectionWrap>
                    </TicketSearchBackground>
                    <button type="submit">Submit</button>
                </form>
            </Container>
        </TicketSearch>
    )
}
