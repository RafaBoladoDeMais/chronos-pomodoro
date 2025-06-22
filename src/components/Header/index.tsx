import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import style from "./Header.module.css";
import { Link } from "../Link";
import { Logo } from "../Logo";
import { useEffect, useState } from "react";

// type HeaderType ={
//     children: React.ReactNode;
// }
type AvaliableThemes = 'dark'|'light';

export function Header(){
    const [theme, setTheme] = useState<AvaliableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
        return storageTheme;
    });
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); 
    }, [theme]);

    const handleChangeTheme = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setTheme(theme != 'light'? 'light':'dark');

    }
    const currentTheme = {
        dark: <SunIcon size={20}/>,
        light: <MoonIcon size={20}/>
    }
    return(
        <div className={style.container}>
           <div className={style.title}>
            <Logo/>
            </div>
            <div className={style["menu-bar"]}>
                <Link icon={<HouseIcon size={20}/>} aria-label="go to home" title='home'/>
                <Link icon={<HistoryIcon size={20}/>} aria-label="show history" title='history'/>
                <Link icon={<SettingsIcon size={20}/>} aria-label="settings" title='settings'/>
                <Link icon={currentTheme[theme]} aria-label="change theme" title='theme'href="www.google.com" onClick={handleChangeTheme}/>
            </div>
        </div>
    )
}