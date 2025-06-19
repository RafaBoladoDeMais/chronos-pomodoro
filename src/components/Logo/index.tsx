import { TimerIcon } from "lucide-react";
import { Icon } from "../Icon";
import styles from "./styles.module.css";

type LogoType = {
    color?: string;
}

export function Logo({color}:LogoType){
    return <div className={styles.logo}>
        <a href="#" style={{color:`${color}`}} >
            <Icon> <TimerIcon size={40}/></Icon>
            <h1>Logo</h1>
        </a>
    </div>
}