import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { Header } from "./components/Header";
import { Button } from "./components/Button";

export function App(){

    return(
        <div className="container">
            <div className="content">
                <Header/>
                <Heading>
                    History
                    <Button icon={<Trash2Icon/>} color={"red"}/>
                </Heading>
            </div>
        </div>
        
    )
};