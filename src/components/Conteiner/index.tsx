import styles from "./styles.module.css";

type ContainerType ={
    children: React.ReactNode;
}

export function Container({children}:ContainerType){

    return(
        <div className={`${styles.container} ${styles.default}`}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}