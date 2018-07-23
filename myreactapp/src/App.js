import React, { Component } from 'react';
import './App.css';
import Person from './Practice/Practice';

class App extends Component {
  
  state ={
    person:[
      {id: 1, name:"Shantanu", age:21},
      {id: 2, name:"Abhishek", age:22},
      {id: 3, name:"Anand", age:23},
      {id: 4, name:"Pallavi", age:24},
      {id: 5, name:"Gauri", age:25}
      

    ]
  }

  changevalue = (event,id) => {
    
    const personindex = this.state.person.findIndex(p =>{ return p.id === id});
    
    const changeperson = {
      ...this.state.person[personindex]
    };

    changeperson.name = event.target.value;

    const copyofobj = [...this.state.person];
    
    copyofobj[personindex]= changeperson;

    this.setState({person : copyofobj})

  }
  
  toggle = () => {
    
    const status = this.state.showstatus;
    this.setState({ showstatus : !status});
  }

  deleteperson = (index) =>{
    //const person = this.state.person.splice();
    const person = [...this.state.person]
    person.splice(index,1);
    this.setState({person:person})
  }


  render() {
    const style = {
      backgroundColor: 'white',
      color: 'inherit ',
      border: '1px solid black',
      padding : '10px',
      cursor : 'pointer'
    };
 
    let person = null;
        if(this.state.showstatus)
        {
        person = (
          <div> 
            { this.state.person.map( (person,index) =>{
              return <Person 
              name = {person.name} 
              age={person.age}
              click ={()=> this.deleteperson(index)} 
              key ={person.id}
              change={(event)=> this.changevalue(event,person.id)}
              />
            })}
            
          </div>
        );

        }
        else{
          person=null;
        }

    return (
      <div className="App">
            <h1>First react App</h1>
            <button
            style={style}
            onClick={this.toggle}> CLick me </button>
           {person}
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'"This is awesome!!"'));
  }
}

export default App;
