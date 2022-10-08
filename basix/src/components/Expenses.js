import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Card from './card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Filter from './Filter';
function expenses(props){
    const [FilterData,setFilterData]=useState('2020');

    //get the selected year as child to parent data pass child is Filter
    const ExpensefilterData=(SelectedYear)=>{
        setFilterData(SelectedYear);
        console.log(FilterData);

    };

    return (
        <> 
       
        <br/>
        <div className='expense'>
          <Card>  
            <Filter FilterEventHandle={ExpensefilterData}></Filter>

            {props.arr.map((expense) => <ExpenseItem Edate={expense.Edate} title={expense.title} Eamount={expense.Eamount}/>)}
         
         
            </Card>
         </div>
        </>

    );


}

export default expenses;