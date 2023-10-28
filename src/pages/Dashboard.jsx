import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers"

//loader function
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData();    //Hook, allows you to use loader in react router

    return(
        <div>
            <h1>{userName}</h1>
            <p>Dashboard</p>
        </div>
    )
}

export default Dashboard