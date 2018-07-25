 import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit'
import Persons from '../Components/Persons/Persons';
import withClass from '../HOC/HOC';

class App extends Component {
  
  state ={
    person:[
      {id: 1, name:"Shantanu", age:21},
      {id: 2, name:"Abhishek", age:22},
      {id: 3, name:"Anand", age:23},
      {id: 4, name:"Pallavi", age:24},
      {id: 5, name:"Gauri", age:25}
      

    ],
    showstatus: false
    
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
  
    
     

    let person = null;
        if(this.state.showstatus)
        {
        person = (
          <div> 
            <Persons 
            persons={this.state.person}
            click={this.deleteperson}
            change={this.changevalue}
            
            />
            
          </div>
        );

       
       
        }
        else{
          person=null;
        }

    return (
    
      <withClass classes={classes.App}>
            <Cockpit
            status ={this.state.showstatus}
            person = {this.state.person}
            click ={this.toggle}
            />
           {person}
      </withClass>
      
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'"This is awesome!!"'));
  }
}

export default App;
