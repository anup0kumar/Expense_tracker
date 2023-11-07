import React,{useState} from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';


let DUMMY_EXPENSE= [
    { 
        id:'e1',
        title:'school Fee',
        amount:250,
        date: new Date(2023,5,12)
    },
    { 
       id:'e2',
        title:'Bike Insurance',
        amount:250,
        date: new Date(2023,5,10)
    },
    { 
        id:'e3',
        title:'Tution Fee',
        amount:50,
        date: new Date(2023,5,22)
    },
    { 
        id:'e4',
        title:'Home appliances',
        amount:5550,
        date: new Date(2023,5,2)
    }
]; 


//we are using this for making component 
// function App(){
//after using normal function till now we from now use arrow function
const App = ()=>{
    // let expenseDate = new Date(2023,3,28);
    // let expenseTitle = "School Fee";
    // let expenseAmount = 300;


    //array of objects
    // let expenses = [
    //     { 
    //         id:'e1',
    //         title:'school Fee',
    //         amount:250,
    //         date: new Date(2023,5,12)
    //     },
    //     { 
    //         id:'e2',
    //         title:'Bike Insurance',
    //         amount:250,
    //         date: new Date(2023,5,10)
    //     },
    //     { 
    //         id:'e3',
    //         title:'Tution Fee',
    //         amount:50,
    //         date: new Date(2023,5,22)
    //     },
    //     { 
    //         id:'e4',
    //         title:'Home appliances',
    //         amount:5550,
    //         date: new Date(2023,5,2)
    //     }
    // ];

    //lec 17 storing data from the user


        const [expenses,setExpenses] = useState(DUMMY_EXPENSE);
//now we want to add the data from the child NewExpense so we have to make function
    const addExpenseHandler =(expense) => {
        // console.log(expense);
        const updatedExpense = [expense, ...expenses]
        const exp = updatedExpense;
        // console.log(string);
        setExpenses(updatedExpense);
        localStorage.setItem("expenselist", exp)

    };


    return (
       <div>
        {/* <h2>Let's Get Started</h2> */}
        {/* // food="Maggie" we can also add like this but > come after end of variables */}

        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses item={expenses}/>
       </div>
    );
}
//the above is component
export default App;