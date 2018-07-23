import React, { Component } from 'react';
import Input from '../src/Input/Input'
import ValidationComponent from '../src/ValidationComponent/ValidationComponent';
import CharComponent from '../src/CharComponent/CharComponent';
import './App.css';

class App extends Component {

  state = {

    length: 0,
    value: "",
    strings:[]
  
    
  }

  calculatelength = (event)=>{
    let letterarray = this.state.value.split(" ");
     let length = event.target.value.length;
     let value =event.target.value;
    this.setState({length:length,value:value,strings:letterarray});
  }
 
  deleteletter = (index) =>{
    
    let letterarray = [...this.state.strings];
   console.log(letterarray);
   letterarray.splice(index,1);
    //let newvalue = letterarray.join();
    this.setState({
      ...this.state,
      strings:letterarray});
    console.log(letterarray);
  }


  render() {
    let letterarray=[...this.state.strings];
    let letter = null;
    letter = (
      <div>
        {
            letterarray.map((letter,index)=>{
                return <CharComponent show={letter} 
                                      key={index}
                                      click={()=> this.deleteletter(index) }
                />

            }
          )
        }

      </div>
    );


    return (
      <div className="App">
        <header className="App-header"></header>
          <Input change={(event)=>this.calculatelength(event)} 
                  length = {this.state.length}
          />
          <ValidationComponent length = {this.state.length}/>
          {letter}
      </div>
    )
  }
}

export default App;
