import { useContext, useState } from "react";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { Todoitemscontext } from "../store/todo-item-store";

function Addtodo(){
  const contextobj = useContext(Todoitemscontext);
  const addnewitem = contextobj.addnewitem;
  const [todoname , settodoname]= useState("");
  const [duedate , setduedate]= useState("");
  const handlenamechange =(event) =>{
    settodoname(event.target.value);
  };

  const handledatechange = (event) =>{
    setduedate(event.target.value);
  };
  const handleaddbuttonclick = (event)=>{
    event.preventDefault();
    addnewitem(todoname,duedate);
    setduedate("");
    settodoname("");
  }
return<>
<form class="row kgrow" onSubmit={handleaddbuttonclick}>
<div class="col-6">
  <input type="text" placeholder='Enter Todo Here' onChange={handlenamechange} value={todoname} />
</div>
<div class="col-4">
  <input type="date" onChange={handledatechange} value={duedate} />
</div>
<div class="col-2">
<button 
onSubmit={addnewitem} 
class="btn btn-success kgbutton"
><MdOutlineNotificationAdd/></button>
</div>
</form>
</>
};
export default Addtodo;