import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appname from './appname';
import Addtodo from './addtodo';
import Todoitem1 from './todoitem1';
import Todoitem2 from './todoitem2';

function App() {
return<div class="container-fluid item">
    <Appname></Appname>
  <Addtodo></Addtodo>
  <Todoitem1></Todoitem1>
  <Todoitem2></Todoitem2>
 </div>
};

export default App
