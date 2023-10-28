import { Form, NavLink } from "react-router-dom"
import MeowMi from "../assets/MeowMi.png"
import { TrashIcon } from '@heroicons/react/24/solid';

const Nav = ({userName}) => { 
    return (
        <nav>
            <NavLink to="/" aria-label="Go to homepage">
                <img src={MeowMi} alt="cat wearing a witch hat" height={60} />
                <span>Meow Money</span>
            </NavLink>
            {
                userName && (
                    <Form 
                        method="post" 
                        action="/logout" 
                        onSubmit={(event) => {
                            if(!confirm("Delete user and all data")) {
                                event.preventDefault();
                            }
                        }}
                        >
                        <button type="submit" className="btn btn--warning">
                            <span>Delete User</span>
                            <TrashIcon width={20} />
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}

export default Nav