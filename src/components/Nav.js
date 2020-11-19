import piggy from "../porco.png";
import React from "react";

const Nav = (props) => { 
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <span>
        <br></br>
        <label>Greased?  </label>
        <input type='checkbox' onClick={props.isGreased} />
      </span>
      <span>
        <br></br>
        <label>Sort By Weight  </label>
        <input type='checkbox' onClick={props.sortWeight} />
      </span>
      <span>
        <br></br>
        <label>Sort By Name </label>
        <input type='checkbox' onClick={props.sortName} />
      </span>
    </div>
  );
};



export default Nav;
