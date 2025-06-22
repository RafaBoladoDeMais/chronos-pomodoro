import { Form } from "../../components/Form";
import { MainTemplate } from "../../Templates/MainTemplate";
import { CountDown } from "../../components/CountDown";



export function Home(){


    return(        
    <MainTemplate>
        <CountDown  />
        <Form />
    </MainTemplate>
    )
}