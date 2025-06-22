import { PlayCircleIcon } from "lucide-react";
import { CommandButton } from "../CommandButton";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import styles from "./styles.module.css";

type FormType ={
    act?:string
    met?: string,
} 

export function Form({act, met}:FormType){
    const action = act || "#";
    const method = met || "GET";

    const labels = new Map<string, string>([
        ['task','text'],

    ]);
    return(
        <form action={action} method={method} className={styles.form}>
            <Input labels={labels} placeholder="Informe a tarefa" />
            <div>
                <p>proximo intervalo aqui -- </p>
            </div>
            <Cycles/>
            <CommandButton icon={<PlayCircleIcon/>} />
        </form>
    )
}