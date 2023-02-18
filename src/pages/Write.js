import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../todoContext';

const Write = () => {
    const {dispatch} = useContext(MyContext);
    const [ip, setIp] = useState('');
    const navigate = useNavigate();

    const submit = (e)=>{
        e.preventDefault();
        dispatch({type:'insert', data:ip})
        navigate('/')
    }
  return (
    <div className='todo'>
        <h2>Write</h2>
        <div>
            <form onSubmit={submit}>
                <input type="text" name="write" onChange={(e)=>setIp(e.target.value)}/>
                <input type="submit" value="등록" />
            </form>
        </div>
    </div>
  )
}

export default Write