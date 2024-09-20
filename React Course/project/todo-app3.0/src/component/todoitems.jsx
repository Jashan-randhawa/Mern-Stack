import { Todoitemscontext } from "../store/todo-item-store";
import Todoitem from "./todoitem"
import { useContext } from "react";
import style from "./todoitems.module.css"

const Todoitems =() =>{
  const contextobj = useContext(Todoitemscontext);
  const todoitem = contextobj.todoitem;
  const deleteitem = contextobj.deleteitem;

  return<div className={style.itemcontainer}>
    {todoitem.map((item) =>
     <Todoitem
      key = {item.name}
      todoitem={item.name} 
      ondeleteclick ={deleteitem} 
      tododate={item.duedate} ></Todoitem>)}
  </div>
}
export default Todoitems;