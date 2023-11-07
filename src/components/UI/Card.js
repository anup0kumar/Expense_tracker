import React from 'react';
import './Card.css';
// to use state we need react library that is why we imported it in every js file 
// function Card(props){
let Card = (props)=>{
    const classes= 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}
export default Card;