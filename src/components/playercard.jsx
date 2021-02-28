import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa';
import { BiReset } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Playercard = ({ players, removePlayer }) => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(prevCount => prevCount + 1);
    }
    function handleDecrement() {
        if(count > 0){
            setCount(prevCount => {
                return (prevCount - 1 )});
        }
    }

    return players.map((player, index) => (
        <div className="playercard row" key={index}>
            <div className="col-md-4 user_icon">
                <FaRegUserCircle />
            </div>
            <div className="col-md-8">
                <div className="row justify-content-end">
                    <button className="delete_player" onClick={() => removePlayer(player.id)}><RiDeleteBin5Line /> Delete</button>
                </div>
                <div className="row player_name">
                    <input type="text" name="" id="" value="Player nr 1"/>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="score">{count}</p>
                        <button className="reset" onClick={() => setCount(0)}><BiReset /> Reset</button>
                    </div>
                    <div className="col">
                        <button className="increment" onClick={handleIncrement}>+ Increment</button>
                        <button className="decrement" onClick={handleDecrement}>- Decrement</button>
                    </div>
                </div>
            </div>
            
        </div>
    ));
}

export default Playercard
