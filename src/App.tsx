import "./styles/theme.css";
import "./styles/global.css";
import { PlayCircleIcon, TimerIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { Header } from "./components/Header";
import { CountDown } from "./components/CountDown";
import { Container } from "./components/Conteiner";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Cycles } from "./components/Cycles";
import { CommandButton } from "./components/CommandButton";

export function App(){
    const labels = new Map<string, string>([
        ['task','text'],

    ]);
    return(
        <>
        <Container>
            <Header/>
        </Container>
        <Container>
            <CountDown/>
        </Container>
        <Container>
            <Form>
                <Input labels={labels} placeholder="Informe a tarefa" />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dolorum?</p>
                </div>
                <Cycles/>
                <CommandButton icon={<PlayCircleIcon/>} />
            </Form>
        </Container>
        </>
        
    )
};