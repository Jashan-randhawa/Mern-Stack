import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css';
import Display from './components/display';
import Button from './components/buttons';

function App() {
  const [calval , setcalval] = useState("");
  const onbuttonclick = (buttontext) => {
    if(buttontext === 'c'){
      setcalval("")
    }
    else if(buttontext === '='){
      const result = eval(calval);
      setcalval(result)
    }
    else{
      const newdisplayvalue =calval+buttontext;
      setcalval(newdisplayvalue);
    }
  };
  return<div className={style.calculator} >
    <Display displayvalue ={ calval }></Display>
    <Button onbuttonclick = {onbuttonclick} ></Button>
  </div>
}

export default App
