import { PlayCircleIcon } from "lucide-react";
import { CommandButton } from "../CommandButton";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import styles from "./styles.module.css";
import { useContext, useRef } from "react";
import { TaskContext } from "../../contexts/TaskContext/TaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

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


    const {state, setState} = useContext(TaskContext);
    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);
    
    console.log(state);
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!taskNameInput.current) return;

        const taskName = taskNameInput.current.value.trim();

        if(!taskName){
            alert("Informe o nome da tarefa");
            return;
        }

        const newTask:TaskModel = {
            id: crypto.randomUUID(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],    
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60; 

        setState((prevState) => ({
            ...prevState,
            activeTask: newTask,
            currentCycle: nextCycle,
            secondsRemaining,
            formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
            tasks: [...prevState.tasks, newTask],
        }));
    }

    return(
        <form onSubmit={handleFormSubmit} action={action} method={method} className={styles.form}>
            <Input labels={labels} placeholder="Informe a tarefa" ref={taskNameInput} />
            {state.currentCycle > 0 && (
                <>
                <div>
                    <p>proximo intervalo aqui {state.config[getNextCycleType(nextCycle)]} </p>
                </div>
                    <Cycles/>
                </>
            )}
            <CommandButton icon={<PlayCircleIcon/>} />
        </form>
    )
}