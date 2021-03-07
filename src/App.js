import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/card";
import Header from "./components/header";
import { RiDeleteBin5Line } from 'react-icons/ri';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }
    
  addItems = () => {
    let items = [...this.state.items];
    // let lastId = Math.max.apply(null, items.map(item => item.id));
    let lastId = this.state.items.length;
    let newId = lastId + 1;
    this.setState(state => {
      const newItem = {
        id: newId,
        value: 'Player #' + newId
      };
      const prevId = {id: newId}
      console.log(prevId)
      const newItems = [newItem, ...items]
      
      this.setState({ items: newItems });
    });
  }
  
  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };

  deleteAll = () => {
    this.setState({
        items: []
    })
  }

  render() {
    return (
      <React.Fragment>
        
        <Header />
        <div className="App">
          <div className="container">
            {this.state.items.length > 0 ?
              <div className="card-infos row d-flex justify-content-between">
                <p>Total Players: {this.state.items.length}</p>
                <button className="delete-all" onClick={this.deleteAll}><RiDeleteBin5Line /> Delete all</button>
              </div>
            :
            <div className="card-infos-no-player text-center">
                <h2>No players in list!</h2>
                <p>Click add player button to add players</p>
            </div>
            }
            {this.state.items.map(item => (
              <Card 
              key={item.id} 
              onDelete={this.handleDelete} 
              item={item} 
              value={item.value}
              />
            ))}
            <div className="d-flex justify-content-center">
              <button className="add_player_btn" onClick={this.addItems}>+ Add Player</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;