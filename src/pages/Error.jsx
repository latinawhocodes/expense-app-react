import { useRouteError, Link } from "react-router-dom"
import AstronautCat from "../assets/AstronautCat1.png";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => { 
    const error = useRouteError()

    return (
        <div className="error">
            <h1>Houston we have a problem...</h1>
            <img src={AstronautCat} width={600}></img>
            <p>{error.message || error.statusText}</p>

                <div className="flex-md">
                    <button className="btn btn--dark">
                        <ArrowUturnLeftIcon width={20} />
                        <span>Back to Safety</span>
                    </button>
                    <Link
                        to="/"
                        className="btn btn--dark">
                        <HomeIcon width={20}/>
                        <span>Return Home</span>
                    </Link>
                </div> 
        </div>
    )
}

export default Error
// astronaut cat picture is personal use only!!
//confused cat picture is personal use only!!