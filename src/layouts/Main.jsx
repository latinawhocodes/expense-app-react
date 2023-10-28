import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers"

import chibi_avatar1 from "../assets/chibi_avatar1.png";
import Nav from "../components/Nav";

//loader
export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData();

    return (
        <div className="layout">
            <Nav userName={userName}/>
            <main>
                <Outlet />
            </main>
            <img src={chibi_avatar1} alt="Pretty Girl with Brown Hair" />
            <h1>Main</h1>
        </div>
    )
}

export default Main