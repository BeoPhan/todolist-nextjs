import React, { useState } from 'react';
import Head from 'next/head';
import '../assets/css/global.css';
import TodoList from './index'
import TodoForm from './todoform'

function App(){
  const [todoList, setTodoList] = useState([
    {id: 1, text:'todoItem 1'},
    {id: 2, text:'todoItem 2'},
  ]);
  //  const [todoEditingId,setTodoEditingId] = useState('')

function handleTodoFormSubmit(formValues){

  const newTodo ={
    id: new Date().valueOf(),
    ...formValues,
  };
  const newTodoList = [...todoList];
  newTodoList.push(newTodo);
  setTodoList(newTodoList);
};

  return(
    <div className ="todoapp">
    <h1> todos</h1>
    <TodoForm onSubmit={handleTodoFormSubmit} />
    <TodoList todos={todoList} />

    </div>
  )
}
export default App;

// function MyApp({ Component, pageProps }) {
//   return (
//   <div>
//     <Head >
//     <title>TodoApp - Leo Phan</title>
//     </Head>
//     <Component {...pageProps} />
// </div>)}

// export default MyApp
