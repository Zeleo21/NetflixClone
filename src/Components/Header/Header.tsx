import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HeaderElement from "./HeaderElement.tsx";

const Header = () => {
    return (
        <div className="flex sticky justify-around items-center w-full bg-primary">
            <HeaderElement name="Home" icon={<HomeRoundedIcon/>}></HeaderElement>
        </div>
    )
}

export  default Header;