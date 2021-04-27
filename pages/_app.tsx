import React, { useState } from 'react';
import Head from 'next/head';
import '../assets/css/global.css';
import TodoList from './index';
import TodoForm from './todoform';
import Footer from './footer'


function App(){
  const [todoList, setTodoList] = useState([
    {id: 1, text:'todoItem 1',isCompleted:true},
    {id: 2, text:'todoItem 2',isCompleted:false},
  ]);

  const [status,setStatus] = useState('ALL'); 
 
  const isNotCheckedAll = (todoList = []) => todoList.find(todo=> !todo.isCompleted);
  const filterByStatus = (todoList = [], status = "", id = "") => {
    switch (status) {
      case "ACTIVE":
        return todoList.filter((todo) => !todo.isCompleted);
      case "COMPLETED":
        return todoList.filter((todo) => todo.isCompleted);
      case "REMOVE":
        return todoList.filter((todo) => todo.id !== id);
      default:
        return todoList;
    }}



  const [isCheckedAll, setIsCheckedAll] = useState(false); 
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
};

function markCompleted(todo){
  const index = todo.id;
  const updatedList =   todoList.map(item =>  item.id === index   ? {...item, isCompleted : !todo.isCompleted}  : item );
  setTodoList(updatedList)
  setIsCheckedAll(!isNotCheckedAll(updatedList));
};

function checkAllTodos (){
  const updatedList =   todoList.map(item => ({...item, isCompleted : !isCheckedAll}));
  setTodoList(updatedList)
  setIsCheckedAll(!isCheckedAll );
}

function setStatusFilter(status){
  setStatus(status);
}

function clearCompleted(){
  const newTodoList = [...todoList];
  setTodoList(filterByStatus(newTodoList,'ACTIVE'))
}


  return(
    <div className ="todoapp">
      <Head><title>TodoApp-NextJS</title></Head>
    <h1> todos</h1>
    <TodoForm 
    isCheckedAll = {isCheckedAll}
    onSubmit={handleTodoFormSubmit} 
    />
    <TodoList 
    todos={filterByStatus(todoList,status)} 
    onDelClick={handleDeleteItem}
    onEditTodo={handleEditTodo}
    onEditedTodo = {handleEdited}
    markCompleted = {markCompleted}
    isCheckedAll = {isCheckedAll}
    checkAllTodos = {checkAllTodos}
    />

    <Footer 
    setStatusFilter = {setStatusFilter}
    status = {status}
    clearCompleted = {clearCompleted}
    numOfTodos = {todoList.length}
    numOfTodosLeft =  {filterByStatus(todoList,'ACTIVE').length}
    />
    </div>
  )
}
export default App;


