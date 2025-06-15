import style from "./Icon.module.css";


type IconType = {
    children: React.ReactNode;
    color?: string;
}

export function Icon({children, color}:IconType){
    console.log("icon", children);
    return (
        <div>
            {children}
        </div>
    )
}