import style from "./Icon.module.css";


type IconType = {
    children: React.ReactNode;
}

export function Icon({children}:IconType){
    return (
        <div>
            {children}
        </div>
    )
}