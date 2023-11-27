import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import { toast } from "react-toastify";
import Intro from "../components/Intro";

//loader function
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

export async function dashboardAction({request}) {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName));
        return toast.success(`Welcome, ${formData.userName} !`);
    } catch {
        throw new Error("There was a problem creating your account.")
    }
}

const Dashboard = () => {
    const { userName } = useLoaderData(); //Hook, allows you to use loader in react router

    return(
        <>
            { userName ? ({userName}) : <Intro /> }
        </>
    )
}

export default Dashboard