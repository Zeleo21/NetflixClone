import {CatalogItemInterface} from "../../Interface/Catalog.ts";
import {useState} from "react";
import CatalogModal from "../UIComponents/Modal.tsx";
import CatalogModalContent from "./CatalogModalContent.tsx";

const CatalogItem = (props: { catalogItem : CatalogItemInterface }) => {
    const [displayModal, setDisplayModal] = useState(false)

    const displayingModal = () => {
        console.log(displayModal)
        setDisplayModal(true)
    }
    return (
        <>
            {displayModal ?
                <CatalogModal isOpen={displayModal} onClose={() => setDisplayModal(false)}>
                    <CatalogModalContent catalogItem={props.catalogItem}></CatalogModalContent>
                </CatalogModal>
                : null}
           <div onClick={displayingModal} className="flex flex-col justify-center items-center text-white m-1 hover:scale-105">
               <img src={props.catalogItem.image_url}
                     alt={props.catalogItem.name}
                     className="object-fill h-40 w-80 rounded"
                />
            </div>
        </>
    );
}

export default CatalogItem;