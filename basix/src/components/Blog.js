import React from 'react'
import ReactDOM from 'react-dom'
import BlogItem from './BlogItems';


const Blog=(props)=>{
return(
    <div>
        <div>
            {props.arr.map((data)=><BlogItem name={data.name} blogname={data.blogname} content={data.content}/>
            )}
        </div>
    </div>

);

}

export default Blog;