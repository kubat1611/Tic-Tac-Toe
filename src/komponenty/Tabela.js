import React from "react";

import "./Tabela.css"


export const Tabela = ({wyniki, turaX, resetWyniku}) => {
    const {xWynik, oWynik} = wyniki;
    return (
        <div className="tabela">
            <span className={`wynik x-wynik ${!turaX && "nieaktywny"}`}>X - {xWynik}</span>
            <button className="resetWyniku" onClick={resetWyniku}>Reset</button>
            <span className={`wynik o-wynik ${turaX && "nieaktywny"}`}>O - {oWynik}</span>
            </div>
    )
}

