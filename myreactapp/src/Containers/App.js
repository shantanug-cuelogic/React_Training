import React, { Component } from 'react';
import classes from './App.css';

import Person from '../Components/Persons/Person/Practice';

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
  
    
      const dynamicstyle = [];
      if(this.state.person.length===0)
      {
        dynamicstyle.push(classes.one);
      }
      if(this.state.person.length===1)
      {
        dynamicstyle.push(classes.two);
      }
      if(this.state.person.length===2)
      {
        dynamicstyle.push(classes.three);
      }
      if(this.state.person.length===3)
      {
        dynamicstyle.push(classes.four);
      }
      if(this.state.person.length===4)
      {
        dynamicstyle.push(classes.five);
      }

      let buttonstyle = '' ;

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

        buttonstyle=classes.red;
       
        }
        else{
          person=null;
        }

    return (
    
      <div className={classes.App}>
            <h1>First react App</h1>
            <h3 className={dynamicstyle}>Changes Color According to Manipulation </h3>
            <button className={buttonstyle}
            onClick={this.toggle}> CLick me </button>
           {person}
      </div>
      
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'"This is awesome!!"'));
  }
}

export default App;
