import React, { Component } from "react";
import { FaRegUserCircle } from 'react-icons/fa';
import { BiReset } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            value: this.props.value,
        };
    }
    
    handleIncrement = e => {
        this.setState({ count: this.state.count + 1 });
    };
    handleDecrement = e => {
        this.setState({ count: this.state.count - 1 });
    };
    handleChange = e => {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            
        <React.Fragment>
            <div className="playercard row">
                <div className="col-md-4 user_icon">
                    <FaRegUserCircle />
                </div>
                <div className="col-md-8">
                    <div className="row justify-content-end">
                        <button className="delete_player" onClick={() => this.props.onDelete(this.props.item.id)}><RiDeleteBin5Line /> Delete</button>
                    </div>
                    <div className="row player_name">
                        <input type="text" name="" id={this.props.item.id} value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="score">{this.state.count}</p>
                            <button className="reset" onClick={() => this.setState({ count: 0 })}><BiReset /> Reset</button>
                        </div>
                        <div className="col">
                            <button className="increment" onClick={this.handleIncrement}>+ Increment</button>
                            <button className="decrement" onClick={this.handleDecrement}>- Decrement</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </React.Fragment>
        );
    }
    
}

export default Card;