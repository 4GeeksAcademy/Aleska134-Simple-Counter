//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {PropTypes} from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";
function SimpleCounter(props){

    return(
        <div className="bigCounter">
        <div className="calendar">
        <i class="fa-regular fa-clock fa-spin"></i>
        </div>
        <div className="four">{props.digitFour % 10}</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four,three,two,one);
counter++;
// render your react application
ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two}  digitThree={three} digitFour={four} />, document.querySelector("#app"));
},1000)

