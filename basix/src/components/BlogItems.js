import React from 'react'
import ReactDOM from 'react-dom'
import './blogItem.css';
const BlogItem=(props)=>{
return (

    <div className="main-container">
  <div className="heading">
    <h1 className="heading__title">Blogs</h1>
    <p className="heading__credits">{props.blogname}</p>
  </div>
  <div className="cards">
    <div className="card card-1">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">{props.content}</h2>
      <p className="card__apply">
        <a className="card__link" href="#">{props.name} <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    </div>
  </div>  
);

}
export default BlogItem;