import React, {useState} from 'react';

import PropTypes from 'prop-types';

Todo.propTypes = {
    onDeleteClick: PropTypes.func,
}; 

Todo.defaultProps ={
    onDeleteClick: null,
}
function Todo(props) {
    const {
        todo,
        onDeleteClick
      } = props;
      const [text, setText] = useState(todo.text);

      const handleDelete =(todo)=>{ 
          onDeleteClick(todo);
      }
    return (
       <li >
           <div className = "view">
               <input className ="toggle" 
               type = "checkbox"
               checked = {todo.isCompleted}
               />
               <label>{todo.text}</label>
               <button className="destroy" onClick={(e)=> {e.preventDefault; handleDelete(todo);}}></button>

           </div>
       </li>
    );
}

export default Todo;
