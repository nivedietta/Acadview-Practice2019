import React, { Component } from 'react';
import Display from './Display';
import './css.css';
class App extends Component {
  render() {
    return (
      <div>
        <h1> DETAILS </h1> 
        <div class="header">  
        <Display name='Nivedietta' bday='12-Jan-1998' age='21'/>
        </div>
        <div class="middle">
        <Display name='Nivedietta' bday='12-Jan-1998' age='21'/> 
        </div>
         
      </div>
    );
  }
}

export default App;
