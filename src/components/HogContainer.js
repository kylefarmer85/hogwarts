import React, { Component } from 'react';
import HogCard from './HogCard'

class HogContainer extends Component {

  renderHogCard() {
    return this.props.hogs.map(hogObj => {
      return <HogCard hog={hogObj} key={hogObj.name}/>
    })
  }
  
  

  render() {
    console.log(this.props, "test")
    return (
      <div className="ui grid container">
        { this.renderHogCard() }
      </div>
    );
  }
}

export default HogContainer;
