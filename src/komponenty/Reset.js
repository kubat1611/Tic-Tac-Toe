import React from "react";

import "./Reset.css"

export const Reset = ({resetPlanszy}) => {
    return (
            <button className="reset" onClick={resetPlanszy}>Reset</button>
    )
}