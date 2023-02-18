import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../todoContext';
import '../todo.scss';
import Item from './item';

const List = () => {
  const {data} = useContext(MyContext);
  
  return (
    <div className="todo">
        <h2>
            Todolist ({data.length})
            <Link to='/write'>할일등록</Link>
        </h2>
        <ul>
            { 
                data.map(obj=>(
                    <Item key={obj.id} itemValue = {obj}/>
                ))
            }
        </ul>        
    </div>
  )
}

export default List