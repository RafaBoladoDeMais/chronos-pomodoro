import style from "./Icon.module.css";


type IconType = {
    children: React.ReactNode;
}

export function Icon({children}:IconType){
    console.log("icon", children);
    return (
        <div>
            {children}
        </div>
    )
}