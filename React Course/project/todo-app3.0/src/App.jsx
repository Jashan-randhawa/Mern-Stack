import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appname from './component/appname'
import Addtodo from './component/addtodo';
import Todoitems from './component/todoitems'
import Todoitem from './component/todoitem'
import Welcomemessage from './component/welcomemessage'
import { Todoitemscontext } from './store/todo-item-store'
import Todoitemscontextprovider from './store/todo-item-store'


function App() {
return(
  <Todoitemscontextprovider>
  <center className="todo-container">
  <Appname></Appname>
  <Addtodo></Addtodo>
  <Welcomemessage></Welcomemessage>
  <Todoitems></Todoitems>
 </center>
 </Todoitemscontextprovider>
 )
};

export default App
