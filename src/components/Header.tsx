import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import style from "./Header.module.css";
import { Icon } from "./Icon";
import { Button } from "./Button";

// type HeaderType ={
//     children: React.ReactNode;
// }

export function Header(){

    return(
        <div className={style.container}>
           <div className={style.title}>
            <Icon> <TimerIcon size={40}/></Icon>
            <h1>Chronos</h1>
            </div>
            <div className={style["menu-bar"]}>
                <Button icon={<HouseIcon/>}/>
                <Button icon={<HistoryIcon/>}/>
                <Button icon={<SettingsIcon/>}/>
                <Button icon={<SunIcon/>}/>
            </div>
        </div>
    )
}