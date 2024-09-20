import { useContext } from 'react';
import style from './welcomemessage.module.css';
import { Todoitemscontext } from '../store/todo-item-store';
const Welcomemessage =() =>{
  const constobj = useContext(Todoitemscontext);
  const todoitem = constobj.todoitem;
  return(
  todoitem.length === 0 && <p className={style.welcome} >Enjoy Your Day</p>
  )
}

export default Welcomemessage;