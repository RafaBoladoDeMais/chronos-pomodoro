import styles from "./styles.module.css";

type ButtonType = {
    text: string;
    type?: "submit" | "reset" | "button" | undefined;
}

export function Button({text, type}:ButtonType){

    return(
        <button type={type} >{text}</button>
    )
}