import { useRef } from "react";
import { useDispatch } from "react-redux";
const Control =()=>{
      const dispatch = useDispatch();
      const inputelement  = useRef();
      const handleincrement=()=>{
            dispatch({type : "INCREMENT"});
      }
const handledecrement=()=>{
            dispatch({type: "DECREMENT"});
      }
      
const handleaddition=()=>{
      dispatch({type :"ADDITION" ,payload : {num :inputelement.current.value}});
      inputelement.current.value ="";
}

const handlesubtraction=()=>{
      dispatch({type: "SUB" , payload :{num : inputelement.current.value}});
      inputelement.current.value ="";
}
const handletoggle=()=>{
      dispatch({type: "PRIVACY_TOGGLE"});
}
  return<>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleincrement} >+1</button>
        <button type="button" className="btn btn-success" onClick={handledecrement} >-1</button>
        <button type="button" className="btn btn-warning" onClick={handletoggle} >Privacy Toggle</button>

      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center add">
            <input type="text" placeholder="Enter Number " ref={inputelement} className="number" />
            <button type="button" className="btn btn-success" onClick={handleaddition} >ADD</button>
            <button type="button" className="btn btn-success" onClick={handlesubtraction}>Subtract</button>
      </div>
      </>
}

export default Control;