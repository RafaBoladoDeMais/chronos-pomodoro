import styles from "./styles.module.css";

export function Cycles(){

    return(
        <div className={styles.cycles}>

            <span>Ciclos:</span>
            <div className={styles.dotsBox}>
                <span className={`${styles.dot}`}></span>
                <span className={`${styles.dot} ${styles.shortTime}`}></span>
                <span className={`${styles.dot}`}></span>
                <span className={`${styles.dot} ${styles.shortTime}`}></span>
                <span className={`${styles.dot}`}></span>
                <span className={`${styles.dot} ${styles.longTime}`}></span>
            </div>
        </div>
    )
}