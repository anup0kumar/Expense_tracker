import React from "react";
import ExpenseForm  from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{
    //making a function to take data from child (ExpenseForm.js)
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData);

    }
    return (
        <div className="new-expense">
            {/* here we wanted to create form
            so we make it as component as used it here */}
            <ExpenseForm onSaveExpenseData=
            {saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;