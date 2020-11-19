import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from './HogContainer';


class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs
    }
  }


  isGreased = (e) => {

   const greasedHogs = hogs.filter(hog => hog.greased)

    e.target.checked ? 
        this.setState({
         hogs: greasedHogs
        }) 
       : 
      this.setState({
        hogs: hogs
   })

  }

  sortWeight = (e) => {
    const sortWeight = 
      hogs.sort(function(a, b) {
      var textA = a.weight;
      var textB = b.weight;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      
  });

    e.target.checked ? 
    this.setState({
     hogs: sortWeight
    }) 
  : 
  this.setState({
  hogs: hogs
})
  }

  sortName = (e) => {
    const sortName = 
      hogs.sort(function(a, b) {
      var textA = a.name;
      var textB = b.name;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      
  });

    e.target.checked ? 
    this.setState({
     hogs: sortName
    }) 
  : 
  this.setState({
  hogs: hogs
})
  }



  render() {
    return (
      <div className="App">
        <Nav isGreased={this.isGreased} sortWeight={this.sortWeight} sortName={this.sortName}/>
        <HelloWorld />
        <HogContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
