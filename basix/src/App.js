import ExpenseItem from './components/ExpenseItem';
import React ,{useState}from 'react'
import ReactDOM from 'react-dom'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import TailWindComponent from './components/TailWindComponent';

import Blog from './components/Blog';
import BlogForm from './components/BlogFrom'

//changes made here
const DummyExpenses=[
  {
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

const Dummyblog=[{
  name:'Saurabh Kulkarni',
  blogname:'My first Lobe',
  content:'My first lobe is in my school when i was 3.09 year old'


},
{
  name:'Saurabh Kulkarni',
  blogname:'My first cofee',
  content:'I have my first Strubuk kofee when i was in pune, with girl Firend'



}

];


function App() {

  const [expense, setexpense] = useState(DummyExpenses);

  //we have a handler here to get the data
  const ExpenseDataHandler=(enteredNewData)=>{
    //const expenseData={
      //...enteredNewData,
      //id:Math.random().toString()
      //};
      //console.log(expenseData);
      setexpense((prevExpenses)=>{
        return [enteredNewData, ...prevExpenses];
      });


  };



  //states for blog site

  const [blog,setBlog]=useState(Dummyblog);

const BlogdataHandler=(blogData)=>{
  setBlog((prev)=>{
    return [blogData, ...prev];
  });
};


  

  return (
  <div>
    
  <BlogForm OnBlogData={BlogdataHandler}></BlogForm>
  <br/>
  <Blog arr={blog} ></Blog>
 </div>
    

  );
}

export default App;
