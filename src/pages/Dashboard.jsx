import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers"
import Intro from "../components/Intro";

//loader function
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData();    //Hook, allows you to use loader in react router

    return(
        <>
            { userName ? (<p>{userName}</p>) : <Intro /> }
        </>
    )
}

export default Dashboard