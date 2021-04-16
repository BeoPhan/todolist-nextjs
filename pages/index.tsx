import TodoForm from "./todoform";
import Footer from "./footer";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Todo from './todo'

TodoList.propTypes = {
  todos: PropTypes.array,
  onDelClick: PropTypes.func,
  onEditTodo: PropTypes.func,
  onEdited: PropTypes.func,
};

TodoList.defaultProps = {
  todos:[],
  onDelClick: null,
  onEditTodo: null,
  onEditedTodo: null,
}


export default function TodoList(props) {
  const {todos, onDelClick, onEditTodo,onEditedTodo} = props;
  
  const [todoEditingId,setTodoEditingId] = useState(0);

  function handleDeleteClick(todo){
    onDelClick(todo);
  };

  function handleEditClick(todo){
    onEditTodo(todo)
    setTodoEditingId(todo.id)
  };
  function handleEdited(formEdited){
    onEditedTodo(formEdited)
  };
 

  return (
    
    <div >
      <main className = "main">
        <input className ="toggle-all" />
        <label htmlFor="toggle-all" />
        <ul className = "todo-list">
            {todos.map(todo => (
              <Todo 
              key ={todo.id} {...{todo}} 
              onDeleteClick={()=> handleDeleteClick(todo)}
              onEditClick = {()=> handleEditClick(todo)}
              onEdited = {handleEdited}
              {...props}
              />
            ))
            }
        </ul>
      </main>
      <Footer />
      
    
    </div>
  )
}
