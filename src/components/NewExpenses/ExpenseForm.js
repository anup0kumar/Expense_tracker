import React, {useState} from "react";
 import './ExpenseForm.css'
//  import expense_image from '../images/expense_image.jpg';

 const ExpenseForm = (props) =>{

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');


    const titleChangeHandler = (event)=>{
            // console.log(event.target.value);
            setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    };
    const DateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    };
    const sumitHandler = (event) =>{
        event.preventDefault();

        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    
    return(
        <form onSubmit={sumitHandler}>
        
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={ amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value = {enteredDate} onChange={DateChangeHandler}/>
                </div>
                <img src="https://media.istockphoto.com/id/628560830/vector/expenses-checklist-receipts-wallet-calculator.jpg?s=612x612&w=0&k=20&c=qqRcNFA8M3gCv3B46RfvfvgcEczGtCMH_gJRzOZeBH0=" alt="expense-img" style={{ width: '350px',height: '150px',position:"relative",justifyContent:"right" }}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        
    );
 }
 export default ExpenseForm;