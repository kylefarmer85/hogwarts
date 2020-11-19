import React, { Component } from 'react';

class HogCard extends Component {
  constructor() {
    super()
    this.state = {
      isClicked: false
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
      isClicked: !previousState.isClicked
      }
    }) 
  }
  

  render() {
    const pigImgName = this.props.hog.name.toLowerCase().split(' ').join("_") 
    
    let img = require(`../hog-imgs/${pigImgName}.jpg`)

    return (
      <div className="PigTile" onClick={this.handleClick}>
        <h3>{this.props.hog.name}</h3>
        <img src={img} alt={this.props.hog.name}/>
        { 
        this.state.isClicked ?
         <div>
          <p>Specialty: {this.props.hog.specialty}</p> 
          <p>Greased: {this.props.hog.greased ? "Yup" : "Nope" }</p>
          <p>Weight: {this.props.hog.weight}</p>
          <p>Medal: {this.props.hog["highest medal achieved"]}</p>
        </div>
         : null 
         }
      </div>
    )
  }
}

export default HogCard;
