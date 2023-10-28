import { Form } from "react-router-dom"
import { UserPlusIcon } from '@heroicons/react/24/solid';
import GirlFancy1 from "../assets/GirlFancy1.png";

const Intro= () => { 
    return (
        <div class="intro">
            <div>
                <h1>
                    Take Control of <span className="accent"> Your Money </span>
                </h1>
                <p>
                    Personal budgeting is the secret to financial freedom. Start your journey today.
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
            <img src={GirlFancy1} width={600}></img>
        </div>
    )
}

export default Intro