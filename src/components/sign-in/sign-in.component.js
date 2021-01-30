import React, {useState} from 'react'
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss"

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email, password)            
            setEmail("");
            setPassword(""); 
        }
        catch (err){
            console.log(err)
        }
       
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    label="email"
                    required 
                    handleChange={e => setEmail(e.target.value) }                    
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    label="password"
                    required 
                    handleChange={e => setPassword(e.target.value) }                    
                />
                
                <div className="buttons">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
                        Sign in with Google
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}

export default SignIn;
