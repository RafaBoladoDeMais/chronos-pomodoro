import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import style from "./Header.module.css";
import { Link } from "../Link";
import { Logo } from "../Logo";

// type HeaderType ={
//     children: React.ReactNode;
// }

export function Header(){

    return(
        <div className={style.container}>
           <div className={style.title}>
            <Logo/>
            </div>
            <div className={style["menu-bar"]}>
                <Link icon={<HouseIcon size={20}/>}/>
                <Link icon={<HistoryIcon size={20}/>}/>
                <Link icon={<SettingsIcon size={20}/>}/>
                <Link icon={<SunIcon size={20}/>}/>
            </div>
        </div>
    )
}