import {useEffect, useState} from "react";
import {CatalogItemInterface} from "../../Interface/Catalog.ts";
import CatalogItem from "../Catalog/CatalogItem.tsx";
import TitleComponent from "../UIComponents/TitleComponent.tsx";

const mockData: CatalogItemInterface[] = [
    {
        name: "Matrix",
        description: "Cool movie",
        image_url: "https://watchbuddy.fr/wp-content/uploads/2020/09/neso.jpg?w=1642&h=770&crop=1"
    },
    {
        name: "GOT",
        description: "Cool series",
        image_url: "https://img4.hulu.com/user/v3/artwork/6a787bf6-cc23-47a2-a2f3-747e22c30d1c?base_image_bucket_name=image_manager&base_image=51ee66ce-ce8d-4a59-a77d-8c575e2a8904&region=US&format=webp&size=952x536"
    }
]
const CatalogList = (props: {listName: string}) => {
    const [catalogItemList, setCatalogItemList] = useState<CatalogItemInterface[]>([]);

    useEffect(() => {
        setCatalogItemList(mockData);
    },[])
    return (
        <div className="flex flex-col justify-start text-white m-2">
            <TitleComponent title={props.listName}/>
            <div className="flex justify-start items-start">
                {catalogItemList.map((catalogItem, index) => (
                    <CatalogItem catalogItem={catalogItem} />
                ))}
            </div>
        </div>
    );
}

export default CatalogList;