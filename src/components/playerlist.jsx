import React, {useState} from 'react'
import Playercard from './playercard'

function PlayerList() {
    const [players, setPlayers] = useState([])
    const addPlayers = player => {
        const newPlayers = [player, ...players]
        
        setPlayers(newPlayers)
        console.log(newPlayers)
    }

    const removePlayer = index => {
        const removedArr = [...players].filter(player => player.index !== index);
    
        setPlayers(removedArr);
    };

    return (
        <div>
            <p>Total Plyers: {players.length}</p>
            <Playercard 
            players={players}
            removePlayer={removePlayer}
            />
            <button className="add_player_btn" onClick={addPlayers}>+ Add Player</button>
        </div>
    )
}

export default PlayerList
