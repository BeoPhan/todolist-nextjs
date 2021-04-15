import TodoForm from "./todoform";
import Footer from "./footer";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Todo from './todo'

TodoList.propTypes = {
  todos: PropTypes.array,
  onDelClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos:[],
  onDelClick: null,
}


export default function TodoList(props) {
  const {todos, onDelClick} = props;

  function handleDeleteClick(todo){
    onDelClick(todo);
  }
  return (
    
    <div >
      <main className = "main">
        <input className ="toggle-all" />
        <label htmlFor="toggle-all" />
        <ul className = "todo-list">
            {todos.map(todo => (
              <Todo key ={todo.id} {...{todo}} onDeleteClick={()=> handleDeleteClick(todo)}/>
            ))
            }
        </ul>
      </main>
      <Footer />
      
    
    </div>
  )
}
