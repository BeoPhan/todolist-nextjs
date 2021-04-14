import TodoForm from "./todoform";
import Footer from "./footer";
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo'

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos:[],
  onTodoClick: null,
}


export default function TodoList(props) {
  const {todos, onTodoClick} = props;

  return (
    
    <div >
      <main className = "main">
        <input className ="toggle-all" />
        <label htmlFor="toggle-all" />
        <ul className = "todo-list">
            {todos.map(todo => (
              <Todo key ={todo.id} {...{todo}}/>
            ))
            }
        </ul>
      </main>
      <Footer />
      
    
    </div>
  )
}
