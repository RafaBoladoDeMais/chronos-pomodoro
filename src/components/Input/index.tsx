import styles from "./styles.module.css";

type InputType ={ 
    labels: Map<string, string>;
} & React.ComponentProps<'input'>;

export function Input({labels, ...rest}: InputType){
    return(
        <>
        {[...labels.entries()].map(([key, value]) => (
                <div className={styles.inputBox}>
                    <label htmlFor={key}>{key}</label>
                    <input type={value} id={key} {...rest} />
                </div>
                
            ))}
        </>
    )
}