import './ExpenseItem.css';
import React,{useState} from 'react';

import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
// function ExpenseItem(props){
    //  lecture 8
const ExpenseItem = (props)=>{
    //use of props
    // const month =props.date.toLocaleString('en-US',{month:'long'}) ;
    // const year = props.date.getFullYear();
    // const day = props.date.toLocaleString('en-US',{day:'2-digit'});

    // let title = props.title;
    // const clickHandler=() =>{
    //     // alert("clicked"); 
    //     title = "new title..";
    //     //to check whether title of variable title is changed or not
    //     console.log(title);

    //use state is a hook present inside react library
    // useState by default needs a parameter
    //it return two things and for assigning them differnt name we used array destructuring 


//till lec:-12    const [title,setTitle] =  useState(props.title);//we used array destrucuring
   //use of title is to set value of props.title to title and setTitle is a function used to change the name of the title
   
    //useState function return two thing
    //1.array consists of two things 1 var and 2 function
    //2.

    // till lec:-12
    // const clickHandler=() =>{
    //     setTitle(NewTitle);
    // }  
    // const [NewTitle,setNewTitle] = useState("hi"); 
    // const changeHandler = (event)=>{
    //     setNewTitle(event.target.value);
    // }


    return(
        <Card className='expense-item'>
            {/* <div>{props.date.toISOString()}</div> */}
            {/* use of props */}
            {/* <div>
                <div>{ year }</div>
                <div>{ month }</div>
                <div>{ day }</div>
            </div> */}
        
        {/* multiple props */}
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>

                <h2>{props.title}</h2>

                <h2 className='expense-item__price'>  ₹{props.amount}</h2>
            </div>
            {/* til lecture 12 */}
            {/* <input type="text" value ={NewTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    ); 
}
export default ExpenseItem;