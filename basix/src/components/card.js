import './card.css';

import React from 'react'
import ReactDOM from 'react-dom'

function card(props){
    const classes='card '+props.className;

    return (
        <div className='card'>{props.children}</div>

    );
}

export default card;