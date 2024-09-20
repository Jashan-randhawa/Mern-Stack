import Todoitem from "./todoitem"
import style from "./todoitems.module.css"

const Todoitems =({todoitem}) =>{
  return<div className={style.itemcontainer}>
    {todoitem.map((item) =>
     <Todoitem todoitem={item.name} tododate={item.duedate} ></Todoitem>)}
  </div>
}
export default Todoitems;