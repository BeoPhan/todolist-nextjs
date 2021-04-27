import React, {useState} from 'react';

import PropTypes from 'prop-types';

Todo.propTypes = {
    onDeleteClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onEdited: PropTypes.func,
    markCompleted: PropTypes.func,
}; 

Todo.defaultProps ={
    onDeleteClick: null,
    onEditClick:null,
    onEdited:null,
    markCompleted: null,
}
function Todo(props) {
    const {
        todo,
        onDeleteClick,
        onEditClick,
        onEdited,
        markCompleted
      } = props;
      const [text, setText] = useState(todo.text);
      const [isEditing,setIsEditing] = useState(false)


      const handleDelete = (todo)=>{ 
          onDeleteClick(todo);
      }

      const handleEdit = (todo) =>{
            setIsEditing(true);
          onEditClick(todo);
      }

      function handleEdited(e){
        if (!onEdited) return;
        
        const formEdited = {
            id: todo.id,
            text: text,
            isCompleted: false,
        };
        onEdited(formEdited);

        setIsEditing(false)
        setText('')

    }


    return (
       <li className= {`${isEditing ? "editing" : ""} ${todo.isCompleted ? "completed" : ""} `}>
           {!isEditing ?
           <div className = "view">
               <input 
               className ="toggle" 
               type = "checkbox"
               checked = {todo.isCompleted}
               onChange = {()=>markCompleted(todo)}
               />
               <label>{todo.text}</label>
               <button className="destroy" onClick={(e)=> {e.preventDefault(); handleDelete(todo);}}></button>
               <button className="editing" onClick={(e)=> {e.preventDefault(); handleEdit(todo);}}></button>
           </div> :
            <input className ="edit" 
            type = "text"
            value ={text} 
            onChange = {e => setText(e.target.value)}
            onKeyPress ={(e)=>{
                if(e.key === 'Enter') {
                    handleEdited(todo)
                }
            }
            }
            />
            }
       </li>
    );
}

export default Todo;
