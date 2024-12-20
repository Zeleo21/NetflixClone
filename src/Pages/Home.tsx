import Header from "../Components/Header/Header.tsx";
import CatalogList from "../Components/CatalogList/CatalogList.tsx";


const Home = () => {
    return (
        <>
            <Header></Header>
            <CatalogList listName="Feel good movies"></CatalogList>
            <CatalogList listName="Sci-fi"></CatalogList>
        </>
    )
}

export default Home;