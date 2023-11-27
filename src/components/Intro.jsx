import { Form } from "react-router-dom"
import { UserPlusIcon } from '@heroicons/react/24/solid';
import BobaCat1 from "../assets/BobaCat1.png";

const Intro= () => { 
    return (
        <div className="intro">
            <div>
                <h1>
                    Save <span className="accent"> Meow </span> Today
                </h1>
                <p>
                    Personal budgeting is the key to having more money for treats and toys.
                </p>

                <Form method="post">              
                    <input type="text" name="userName" required 
                    placeholder="What is your name?"
                    aria-label="Your Name" autoComplete="given-name" />
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={BobaCat1} width={300}></img>
        </div>
    )
}

export default Intro