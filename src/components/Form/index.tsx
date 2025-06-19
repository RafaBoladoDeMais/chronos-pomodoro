import styles from "./styles.module.css";

type FormType ={
    children?: React.ReactNode;
    act?:string
    met?: string,
}

export function Form({act, met, children}:FormType){
    const action = act || "#";
    const method = met || "GET";

    return(
        <form action={action} method={method} className={styles.form}>
            {children}
        </form>
    )
}