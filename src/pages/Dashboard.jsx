import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers"
import Intro from "../components/Intro";

//loader function
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

export async function dashboardAction({request}) {
    const data = await request.formData();
    console.log({data, request});
}

const Dashboard = () => {
    const { userName } = useLoaderData();    //Hook, allows you to use loader in react router

    return(
        <>
            { userName ? ({userName}) : <Intro /> }
        </>
    )
}

export default Dashboard