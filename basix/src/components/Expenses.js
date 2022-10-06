import React from 'react'
import ReactDOM from 'react-dom'
import Card from './card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function expenses(props){

    return (
        <> 
        <div className='expense'>
         <ExpenseItem Edate={props.arr[0].Edate} Eamount={props.arr[0].Eamount} title={props.arr[0].title}/>
        <ExpenseItem Edate={props.arr[1].Edate} Eamount={props.arr[1].Eamount} title={props.arr[1].title}/> 
         <ExpenseItem Edate={props.arr[2].Edate} Eamount={props.arr[2].Eamount} title={props.arr[2].title}/>
       
         </div>
        </>

    );


}

export default expenses;