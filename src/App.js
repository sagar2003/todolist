
import { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import Todolist from './component/todolist';

function App() {
  const [list,addlist]=useState([]);
  //const listItems = list.map();
  let getData =(valu)=>{
    addlist([...list,valu]);
  }

  let removeitem = (index)=>{
    list.splice(index,1)
    addlist([...list])
  }

 

  return (
    <center>
      <div className="App">
      <InputField getdata={getData}/>
      {list.map((listitem,i)=>{
        return(
          <Todolist key={i} index={i} item={listitem} removeitem={removeitem}/>
        )
      })}
    </div>
    </center>
  );
}

export default App;
