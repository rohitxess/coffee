
export default function Layout(props) {
    const { children } = props;
    
    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFEINED</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button>
                <p>Sign up for free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffeined</span>was made by <a href="" target="_blank">RohitX</a>using the 
            <a target="_blank" href="">FantaCss</a>design library.</p>
        </footer>
    )
    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}