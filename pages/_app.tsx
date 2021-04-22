import React, { useState } from 'react';
import Head from 'next/head';
import '../assets/css/global.css';
import TodoList from './index'
import TodoForm from './todoform'

function App(){
  const [todoList, setTodoList] = useState([
    {id: 1, text:'todoItem 1',isCompleted:true},
    {id: 2, text:'todoItem 2',isCompleted:false},
  ]);
  const [edit,setEdit] = useState({
    id: null,
    text: ''
  })

function handleTodoFormSubmit(formValues){

  const newTodo ={
    id: new Date().valueOf(),
    ...formValues,
  };
  const newTodoList = [...todoList];
  newTodoList.push(newTodo);
  setTodoList(newTodoList);
};
function handleDeleteItem(todo){
  console.log(todo)
   const index = todoList.findIndex(x => x.id === todo.id);
   if (index <0) return;
   const newTodoList = [...todoList];
  newTodoList.splice(index,1);
  setTodoList(newTodoList)
}
function handleEditTodo(todo){
  console.log(todo)

}

function handleEdited(FormEdited){
  const newTodo ={
  
    ...FormEdited,
  }
  console.log(newTodo)
  const index = todoList.findIndex(x => x.id === FormEdited.id);
  const newTodoList = [...todoList];
  newTodoList.splice(index,1,newTodo);
  setTodoList(newTodoList);
}

  return(
    <div className ="todoapp">
      <Head><title>TodoApp-NextJS</title></Head>
    <h1> todos</h1>
    <TodoForm onSubmit={handleTodoFormSubmit} />
    <TodoList 
    todos={todoList} 
    onDelClick={handleDeleteItem}
    onEditTodo={handleEditTodo}
    onEditedTodo = {handleEdited}
    />

    </div>
  )
}
export default App;


