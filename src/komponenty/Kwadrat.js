import React from "react";
import "./Kwadrat.css"

export const Kwadrat = ({ wartosc, onClick}) => {
    const styl = wartosc === "X" ? "Kwadrat X" : "Kwadrat O";
    return(
        <button className={styl} onClick={onClick}>{wartosc}</button>
    )
}