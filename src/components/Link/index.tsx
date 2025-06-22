import style from "./Link.module.css";

type IconType ={
    icon: React.ReactNode;
    color?: string;
    background?: string;
} & React.ComponentProps<'a'>

export function Link({icon, color, background, ...rest}:IconType){
    return(
        <a className={
            `${color == "red"?style.red:style['btn-primary']} ${style.btn} ${background?style[background]:""}`
        } {...rest}>{icon}</a>
    )
}