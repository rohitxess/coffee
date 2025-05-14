
import Modal from "./Modal";
import Authentication from './Authentication';
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Layout(props) {
    const { children } = props;
    // using a state to control the modal 
    const [ showModal, setShowModal ] = useState(false);

    const { globalUser, logout } = useAuth();

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFEINED</h1>
                <p>For Coffee Insatiates</p>
            </div>
            { globalUser ? 
             (<button onClick={(logout) => {
                setShowModal(true)
            }}>
                <p>Logout</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button> ) : (  
            <button onClick={() => {
                setShowModal(true)
            }}>
                <p>Sign up for free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        )}
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffeined</span>was made by <a href="" target="_blank">RohitX</a>using the 
            <a target="_blank" href="">FantaCss</a>design library.</p><br />
            Check out the project on <a href="" target="_blank">GitHub</a> 
        </footer>
    )
    return (
        <>
          {showModal &&
           (  <Modal handleCloseModal = {() => {setShowModal(false)}} >
               < Authentication handleCloseModal = {() => { setShowModal(false)}} />
            </Modal>)}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}