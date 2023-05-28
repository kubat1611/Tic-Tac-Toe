import React from "react";

import "./popup.css"

export function Popup(props) {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <button className="zamknij" onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
            </div>
        </div>
    ) : ""
}