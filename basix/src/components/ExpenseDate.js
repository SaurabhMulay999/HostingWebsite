import './ExpenseDate.css';
import React from 'react'
import ReactDOM from 'react-dom'
function ExpenseDate(props){
    console.log(props.Edate);
    //const peo=props.Edate.toString().split();
    
    const month=props.Edate.toLocaleString({month:'long'});
    const day=props.Edate.toLocaleString({day:'2-digit'});
    const year=props.Edate.getFullYear();    
    console.log(month);

    return (
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>


        </div>




    );
}


export default ExpenseDate;