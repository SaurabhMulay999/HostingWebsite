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
         <ExpenseItem Edate={props.arr[0].Edate} Eamount={props.arr[0].Eamount} title={props.arr[0].title}/>
        <ExpenseItem Edate={props.arr[1].Edate} Eamount={props.arr[1].Eamount} title={props.arr[1].title}/> 
         <ExpenseItem Edate={props.arr[2].Edate} Eamount={props.arr[2].Eamount} title={props.arr[2].title}/>
         </Card>
         </div>
        </>

    );


}

export default expenses;