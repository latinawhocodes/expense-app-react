import { useRouteError } from "react-router-dom"
import GirlFancy1 from "../assets/GirlFancy1.png";
import AstronautCat from "../assets/AstronautCat1.png";

const Error = () => { 
    const error = useRouteError()

    return (
        <div className="error">
            <h1>Houston we have a problem...</h1>
            <img src={AstronautCat} width={600}></img>
            <p>{error.message || error.statusText}</p>
            Error    
        </div>
    )
}

export default Error
// astronaut cat picture is personal use only!!
//confused cat picture is personal use only!!