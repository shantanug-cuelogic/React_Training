import React, { Component } from 'react';
import './App.css';
import Output from './Output/Output';
import Input from './Input/Input';

class App extends Component {

  state = {
    content : "shantanu gade cuelogic technologies"
  }

  changeHandler = (event) =>{
    this.setState({
      content : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
       <Input change change={this.changeHandler} content={this.state.content}/>
       <Output content={this.state.content}/>
       <Output content={this.state.content} />
      </div>
    );
  }
}

export default App;
