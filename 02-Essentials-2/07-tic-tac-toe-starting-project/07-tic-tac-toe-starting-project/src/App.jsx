import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=>
      curActivePlayer === 'X' ? 'O' : 'X'
    );  
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Minou" symbol="X"/>
          <Player initialName="FelipeRod" symbol="0"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App
