import { useState } from "react";
import Item from "./item";
const Fooditem =(props)=>{
  let onbuybutton = (event,item) =>{
    let newitem = [...activeitems, item];
    setactiveitems(newitem);
  };
  let [activeitems, setactiveitems] = useState([])
  return<ul className="list-group">
    {props.items.map((item) => 
     <Item key={item} fooditem={item} 
     bought={activeitems.includes(item)}
     handlebuybutton ={(event) => onbuybutton(event,item)}
     ></Item>
    )}
  </ul>
};
export default Fooditem;