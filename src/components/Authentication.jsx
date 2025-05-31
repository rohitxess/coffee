import { useState } from "react";
import { useAuth } from "../context/AuthContext";


export default function Authentication (props) {
    const { handleCloseModal } = props;
    const [ isRegistration, setIsRegistration ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isauthenticating, setIsAuthenticating ] = useState(false);
    const [ error, setError ] = useState(null);

    const {signup, login } = useAuth();

    // guard clause, to prevent not calling the firebase 

    async function handleAuthenticate() {
        if (!email || !email.includes('@') || !password || password.length < 6 || isauthenticating){    
            return 
        }
        try {
            setIsAuthenticating(true)
            setError(null)
            if (isRegistration) {
                //register a user 
                await signup (email, password)
            } else {
                //login a user 
                await login (email, password)
            }
            handleCloseModal()
        }catch(err){
            console.log(err.message)     
            setError(err.message)
        }finally{
            setIsAuthenticating(false)
        }

    }


    return (
        <>
        <h2 className="sign-up-text">{ isRegistration ? 'Sign up' : 'Login'}</h2>
        <p>{isRegistration ? 'Create an account' : 'Sign in to your account!'}</p>
        <input value={email} type="text" placeholder="Email" 
        onChange={(e) => {
            setEmail(e.target.value)
        }}/>
        <input value={password} type="password" placeholder="*******" 
         onChange={(e) => {
            setPassword(e.target.value)
        }}/>
        <button onClick={handleAuthenticate}>
            <p>{ isauthenticating? 'Authenticating....': 'Submit'}</p>
        </button>
        <hr />
        <div className="register-content">
            <p>{ isRegistration ? 'Already have an account' : 'Dont have an account'}</p>
            <button onClick={() => {setIsRegistration(!isRegistration)} }>
                <p>{ isRegistration ? 'Sign in' : 'Sign Up'}</p>
            </button>
        </div>
        </>
    )
}