import React,{useState} from 'react';
import './todolist.css'
import delet from '/home/sagar/dev/react/demo/src/icons/icon-delet.png';
import edit from '/home/sagar/dev/react/demo/src/icons/editing.png';

function todolist(props) {
  return (
    <div className='item'>
      <p className='textitem'>
        {props.item}
      </p>
      <img src={delet} className='icondelete' onClick={()=>{
        props.removeitem(props.index);
      }}></img>
    </div>
  )
}

export default todolist;