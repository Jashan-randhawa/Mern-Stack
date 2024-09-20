import { createContext } from "react";
import { useReducer } from "react";

const Todoitemsreducer = (currtodoitem,action) =>{
  let newtodoitem = currtodoitem;
  if(action.type === "newitem"){
     newtodoitem = [
      ...currtodoitem , 
      {name : action.payload.itemname , duedate: action.payload.itemduedate },
    ];
  }else if(action.type === "deleteitem"){
    newtodoitem = currtodoitem.filter((item) => item.name !== action.payload.itemname);
  }
  return newtodoitem;
};


export const Todoitemscontext = createContext({
  todoitem: [],
  addnewitem: () => [],
  deleteitem : () => [],
});

const Todoitemscontextprovider = ({children}) =>{


  const [todoitem,dispatchtodoitems] = useReducer(Todoitemsreducer , []);
  //const [todoitem , settodoitem] = useState([]);
  const addnewitem = (itemname, itemduedate) =>{
    const newitemaction = {
      type :"newitem",
      payload : {
        itemname, 
        itemduedate,
      },
    };
    dispatchtodoitems(newitemaction);
  /*   console.log(`new item added : ${itemname} Date : ${itemduedate}`);
    /* const newtodoitem = [...todoitem,{name :itemname ,duedate : itemduedate}]
    settodoitem((currValue)=>
      [...currValue,{name :itemname ,duedate : itemduedate}] 
    ); 
    /* settodoitem(newtodoitem); */
  }
  
  const deleteitem = (todoitemname) =>{
    const deleteitemaction = {
      type :"deleteitem",
      payload : {
        itemname : todoitemname,
      },
    };
    dispatchtodoitems(deleteitemaction);
    /* const newtodoitem = todoitem.filter(item => item.name !== todoitemname);
    settodoitem(newtodoitem);
    console.log(`item deleted  :${todoitemname}`); */
  }
  
  /* const defaulttodoitem = [{
    name:"buy ghee",
    duedate :'today'
  }]; */
  return <Todoitemscontext.Provider value={
    {
      todoitem,
      addnewitem,
      deleteitem,
    }
  }>{children}</Todoitemscontext.Provider>
}

export default Todoitemscontextprovider;