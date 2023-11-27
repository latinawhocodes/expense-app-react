import { Form } from "react-router-dom"
import { UserPlusIcon } from '@heroicons/react/24/solid';
import BobaCat1 from "../assets/BobaCat1.png";
import PlantCat1 from "../assets/PlantCat1.png";


const Intro= () => { 
    return (
        <div className="intro">
            <div>
                <h1>
                    Save <span className="accent"> Meow </span> Today
                </h1>
                <p>
                    Meow money lets you keep track of your expenses and personal budget so you can track and meet your goals. More saving means more treats! 
                    <span className="accent"> Meow </span>
                </p>

                <Form method="post">              
                    <input type="text" name="userName" required 
                    placeholder="What is your name?"
                    aria-label="Your Name" autoComplete="given-name" />
                    <input type="hidden" name="_action" value="newUser"/>
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={PlantCat1} width={300}></img>
        </div>
    )
}

export default Intro