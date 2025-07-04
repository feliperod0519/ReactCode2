import { useState } from "react";

export default function Player({initialName,symbol}){

    const [isEditing,setIsEditing] = useState(false);
    const [playerName,setPlayerName] = useState(initialName);

    let editablePlayerName = <span className="player-name">{playerName}</span>
    //let btnCaption = 'Edit'

    if (isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    function handleEditClick(){
        setIsEditing(editing=>!editing);
        //btnCaption = 'Save'
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    return (
        <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-name">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
        </li>
    );
}