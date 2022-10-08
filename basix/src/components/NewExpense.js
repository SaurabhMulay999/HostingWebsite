import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{

    const ExpenseHandler =(enteredData)=>{
        const expenseData={
        ...enteredData,
        //id:Math.random().toString()
        };
        props.onSavingExpense(expenseData);

        //console.log(expenseData);
    };

return(
    <div>
        <ExpenseForm onSaveExpenseData={ExpenseHandler}></ExpenseForm>

    </div>

);

}

export default NewExpense;