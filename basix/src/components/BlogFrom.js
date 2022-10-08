import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const BlogFrom=(props)=>{

    

    const[name,setName]=useState('');

    const[blogname,setBlogName]=useState('');
    const[content,setContent]=useState('');
    

    const Handler1=(event)=>{
        setName(event.target.value);

    }

    const Handler2=(event)=>{
        setBlogName(event.target.value);

    }


    const Handler3=(event)=>{
        setContent(event.target.value);

    }
    const DOIT=(event)=>{
        event.preventDefault();
        const blogObj={
            name:name,
            blogname:blogname,
            content:content
        };
        console.log(blogObj);
        props.OnBlogData(blogObj);

       
    }


return(
    <div className='mx-96 mt-10'>
        <div>
            <form onSubmit={DOIT}>
            <label>Name</label>
            <br/>
            <input type='text' value={name} onChange={Handler1}></input>
            <br/>
            <label>Blog Name</label>
            <br/>
            <input type='text'  value={blogname} onChange={Handler2}></input>
            <br/>
            <label>Content</label>
            <br/>
            <textarea value={content} onChange={Handler3}></textarea>
             <br/>
             <button type='submit'>Submit</button>
             </form>
        </div>


    </div>


);
}

export default BlogFrom;