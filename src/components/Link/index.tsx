import style from "./Link.module.css";

type IconType ={
    icon: React.ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
    color?: string;
    background?: string;
}

export function Link({icon, type, color, background}:IconType){
    return(
        <button className={
            `${color == "red"?style.red:style['btn-primary']} ${style.btn} ${background?style[background]:""}`
        } type={type}>{icon}</button>
    )
}