import { useTaskContext } from "../../contexts/TaskContext";
import styles from "./styles.module.css";



export function CountDown(){

    const {state} = useTaskContext();

    return(
        <div className={styles.default}>
            {state.formattedSecondsRemaining}
        </div>
    )
}