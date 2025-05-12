import { useState } from "react";


export default function Authentication () {
    const [ isRegistration, setIsRegistration ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isauthenticating, setIsAuthenticating ] = useState(false);

    async function handleAuthenticate() {

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
            <p>Submit</p>
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