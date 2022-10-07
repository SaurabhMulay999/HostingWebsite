import ExpenseItem from './components/ExpenseItem';
import React from 'react'
import ReactDOM from 'react-dom'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import TailWindComponent from './components/TailWindComponent';

//changes made here

function App() {

  //we have a handler here to get the data
  const ExpenseDataHandler=(enteredNewData)=>{
    const expenseData={
      ...enteredNewData,
      id:Math.random().toString()
      };
      console.log(expenseData);

  };

  const arr=[{
    title:'The veggies',
    Eamount:'1200',
    Edate:new Date(2022,2,20)

  },
{
  title:'The Fruits',
    Eamount:'1244',
    Edate:new Date(2022,2,21)

},
{
  title:'News Paper',
    Eamount:'120',
    Edate:new Date(2022,2,30)

}];


  return (
  <div>
    <NewExpense onSavingExpense={ExpenseDataHandler}/>
    <Expenses arr={arr}></Expenses>
    </div>
    

  );
}

export default App;
