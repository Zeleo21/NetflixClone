import {ReactNode} from "react";

const HeaderElement = (props: {name: string, icon: ReactNode }) => {
    return (
        <div className="text-white flex flex-col p-2 items-center">
            {props.icon}
            <p>{props.name}</p>
        </div>
    )
}

export default HeaderElement;