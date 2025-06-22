import { PlayCircleIcon } from "lucide-react";
import { CommandButton } from "../../components/CommandButton";
import { Cycles } from "../../components/Cycles";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { MainTemplate } from "../../Templates/MainTemplate";
import { CountDown } from "../../components/CountDown";

export function Home(){
    const labels = new Map<string, string>([
        ['task','text'],

    ]);
    return(        
    <MainTemplate>
        <CountDown/>
        <Form>
                <Input labels={labels} placeholder="Informe a tarefa" />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dolorum?</p>
                </div>
                <Cycles/>
                <CommandButton icon={<PlayCircleIcon/>} />
            </Form>
    </MainTemplate>
    )
}