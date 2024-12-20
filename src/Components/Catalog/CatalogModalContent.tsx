import {CatalogItemInterface} from "../../Interface/Catalog.ts";
import TitleComponent from "../UIComponents/TitleComponent.tsx";


const CatalogModalContent = (props: {catalogItem: CatalogItemInterface}) => {
    return (
        <div className="flex flex-col justify-center text-white items-center">
            <TitleComponent title={props.catalogItem.name}/>
            <div className="flex justify-around text-xl font-medium w-full">
                <div className="flex flex-col items-center justify-start w-1/2">
                    {props.catalogItem.description}
                </div>
            </div>
        </div>
    );
}

export default CatalogModalContent;