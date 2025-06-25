import { useTaskContext } from "../../contexts/TaskContext";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles(){

    const {state} = useTaskContext();
    const cycleDescription = {
        workTime: "Tempo de trabalho",
        shortBreakTime: "Intervalo curto",
        longBreakTime: "Intervalo longo",
    }
    const cycleStep = Array.from({length: state.currentCycle}, (_, index) => {
        const cycleType = getNextCycleType(index + 1);
        const dotClass = `${styles.dot} ${styles[cycleType] != null? styles[getNextCycleType(index + 1)] : ''}`;
        return <span 
                    key={`${cycleType}-${index + 1}`} 
                    className={dotClass} 
                    title={`${cycleDescription[cycleType]}`}
                    aria-label="Indicador de ciclo de foco"></span>;
    });

    return(
        <div className={styles.cycles}>
            
            <span>Ciclos:</span>
            <div className={styles.dotsBox}>
                {cycleStep.map((dot) => dot)}
            </div>
        </div>
    )
}