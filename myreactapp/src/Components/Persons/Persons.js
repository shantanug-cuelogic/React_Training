import React, { Component } from 'react';
import Person from './Person/Practice';


class Persons extends Component{
  render () {
    return this.props.persons.map( (person,index) =>{
    return <Person
    name = {person.name} 
    age={person.age}
    click ={()=> this.props.click(index)} 
    key ={person.id}
    change={(event)=> this.props.change(event,person.id)}
    />
  });
  }
}




      export default Persons;