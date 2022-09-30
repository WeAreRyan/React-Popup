import "./PopupComponent.css"
import Popup from "../../components/Popup/Popup"
import { useState, useEffect } from "react";

export default function PopupComponent() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
            }, 4000);
    }, [])
    return (
        <>
        <h1> popup comp</h1>
        <div className="popup-container">
        <button 
        className="popup-button"
        onClick={() => setButtonPopup(true)}
        >OPEN POPUP</button>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>React POPUP!</h3>
                <p>This is my button triggered popup</p>
            </Popup>
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h3>React POPUP!</h3>
                <p>This is my time triggered Popup</p>
            </Popup>
        </div>
        </>
    )
} 
