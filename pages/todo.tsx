import React, {useState} from 'react';

function Todo(props) {
    const {
        todo,
      } = props;
      const [text, setText] = useState(todo.text);
    return (
       <li>
           <div className = "view">
               <input className ="toggle" 
               type = "checkbox"
               checked = {todo.isCompleted}
               />
               <label>{todo.text}</label>
               <button className="destroy"></button>

           </div>
       </li>
    );
}

export default Todo;
