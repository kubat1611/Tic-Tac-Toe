import './App.css';

import { Plansza } from './komponenty/Plansza';
import { Tabela } from './komponenty/Tabela';
import { Reset } from './komponenty/Reset';
import { Popup } from './komponenty/popup';

import React, {useState, useEffect} from 'react';

function App() { 

  const Wygrana = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]


  const [plansza, ustawPlansze] = useState(Array(9).fill(null));
  const [turaX, ustawTureX] = useState(true);
  const [wyniki, ustawWynik] = useState({xWynik:0, oWynik:0});
  const [koniec, ustawKoniec] = useState(false);
  const [czasPopupu, ustawCzasPopupu] = useState(false);
 
 

  useEffect(() => {
    setTimeout(() => {
      ustawCzasPopupu(true)
    }, 500)
  }, [])


  const handleBoxClick = (boxId) => {
    const zaktualizowanaPlansza = plansza.map((wartosc, id) =>{
    if(id === boxId){
      return turaX === true ? "X" : "O"
    }else{
      return wartosc
    }
    })

  ustawPlansze(zaktualizowanaPlansza);

  const wygrany = sprawdzWygrany(zaktualizowanaPlansza);

  if(wygrany){
    if(wygrany === "O"){
      let {oWynik} = wyniki;
      oWynik =+ 1
      ustawWynik({...wyniki, oWynik})
    }else{
      let {xWynik} = wyniki;
      xWynik =+ 1 
      ustawWynik({...wyniki, xWynik})
    }
  }


    ustawTureX(!turaX)
}

    const sprawdzWygrany = (plansza) =>{
      for(let i = 0; i < Wygrana.length; i++){
        const [x,y,z] = Wygrana[i];

        if (plansza[x] && plansza[x] === plansza[y] && plansza[y] === plansza[z]){
          ustawKoniec(true)
          return plansza[x];
        }
      }
    }


    const resetPlanszy = () => {
      ustawKoniec(false);
      ustawPlansze(Array(9).fill(null))
    }

    const resetWyniku = () =>{
      ustawWynik({xWynik:0, oWynik:0})
    }

      


  return (
    <div className="App">
      <Tabela wyniki={wyniki} turaX={turaX} resetWyniku={resetWyniku} onClick={resetWyniku}/>
      <Plansza plansza={plansza} onClick={koniec ? resetPlanszy : handleBoxClick}/>
      <Reset resetPlanszy={resetPlanszy} onClick={resetPlanszy}/>
      <Popup trigger={czasPopupu} setTrigger={ustawCzasPopupu}> 
        <h3>Game Rules</h3>
        <p>1. The game is played on a grid that's 3 squares by 3 squares.</p>
        <p>2. You are X, your friend is O. Players take turns putting their marks in empty squares.</p>
        <p>3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</p>
        <p>4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
        <p>5. The game restarts whenever a player chooses the Reset button(when the game ended and the grid isnt full you can just click on a blank square).</p>
        <p>6. Good Luck!</p>
      </Popup>
    </div>
  );
}

export default App;
