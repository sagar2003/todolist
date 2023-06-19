import React,{useState} from 'react';
import './InputField.css';

function InputField(props) {
    const [valu,setVal] = useState('');
  return (
    <div>
        <input className='input' 
               placeholder='enter task'
               value={valu}
               type="text"
               onChange={e=>{
                setVal(e.target.value);
               }}></input>
        <button className='submit'
            onClick={()=>{
                props.getdata(valu);
                setVal('');
            }}>submit</button>
    </div>
  )
}

export default InputField