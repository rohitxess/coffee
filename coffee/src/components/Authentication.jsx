

export default function Authentication () {
    return (
        <>
        <h2 className="sign-up-text">Sign up/ Login</h2>
        <p>Sing in to your account</p>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="*******" />
        <button>
            <p>Submit</p>
        </button>
        <hr />
        <div className="register-content">
            <p>Don&apos;t have an account</p>
            <button>
                <p>Sign up</p>
            </button>
        </div>
        </>
    )
}