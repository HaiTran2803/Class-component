import React from 'react';
import './App.css';
import Header from './components/prtPassProps/Header';
import Greet from './components/others/Greet';
import Welcome from './components/others/Welcome';
import State from './components/others/StateInClass';

class App extends React.Component{
  render(){
      return(
        <div>
          <Header type={"class"}/>
          <Greet name={"Hai"}/>
          <Welcome roll={"Treater"}/>
          <State/>
        </div>
      )
  }
}
export default App