import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appname from './component/appname'
import Addtodo from './component/addtodo';
import Todoitems from './component/todoitems'
import Todoitem from './component/todoitem'

function App() {
  const todoitem = [
    {
      name :"Buy Milk",
      duedate : "24-10-2023",
    },
    {
      name :"Go To College",
      duedate : "24-10-2023",
    },
    {
      name :"Like this vedio",
      duedate :"Right now",
    },
  ];
return<center className="todo-container">
    <Appname></Appname>
  <Addtodo></Addtodo>
  <Todoitems todoitem={todoitem} ></Todoitems>
 </center>
};

export default App
