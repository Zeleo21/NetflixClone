import Chips from "../Components/Spline/Chips.tsx";
import '../App.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useNavigate} from "react-router-dom";
const WelcomePage = () =>  {
    const navigate = useNavigate()
    const GoToHomePage = () => {
        navigate("/home")
    }
    return (
        <div className="flex justify-center align-middle items-center overflow-hidden">
            <Chips></Chips>
            <div className="absolute flex justify-center align-middle items-center h-full w-full">
                <ArrowForwardIosIcon id="WelcomeButtonIcon" className="text-white pt-1" style={{ fontSize: '4.5rem'}}></ArrowForwardIosIcon>
                <button onClick={GoToHomePage} id="WelcomeButton" className="text-white text-7xl font-bold">Get Started !</button>
            </div>
        </div>
    )
}
export default WelcomePage;