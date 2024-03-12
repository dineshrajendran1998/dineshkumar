import React, { Component } from 'react'

export default class ChildComp extends Component {

   componentDidMount(){
        console.log( "Child Mounting" );
   }
   
   componentDidUpdate(){
        console.log( "Child Update" );
   }
  render() {
    console.log( "Child render" );
    return (
      <div>
        <h1> Im form Child </h1>
      </div>
    )
  }
}
