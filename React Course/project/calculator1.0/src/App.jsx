import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css';
import Display from './components/display';
import Button from './components/buttons';

function App() {
  return<div className={style.calculator} >
    <Display></Display>
    <Button></Button>
  </div>
}

export default App
