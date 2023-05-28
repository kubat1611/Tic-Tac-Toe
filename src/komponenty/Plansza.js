import React from "react";

import { Kwadrat} from "./Kwadrat"
import "./Plansza.css"

export const Plansza = ({plansza, onClick}) => {
    return (
        <div className="plansza">
            {plansza.map((wartosc, id) =>{
                return <Kwadrat wartosc = {wartosc} onClick = {() => wartosc === null && onClick(id)} />
            })}
        </div>
    )
}