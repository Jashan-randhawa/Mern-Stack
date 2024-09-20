
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counteraction } from "../../store/counter";
import { privacyaction } from "../../store/privacy";

const Control =()=>{
      const dispatch = useDispatch();
      const inputelement  = useRef();
      const handleincrement=()=>{
           dispatch(counteraction.increment());
      }
const handledecrement=()=>{
            dispatch(counteraction.decrement());
      }
      
const handleaddition=()=>{
      dispatch(counteraction.addition({
            num : inputelement.current.value
      }));
      inputelement.current.value ="";
}

const handlesubtraction=()=>{
      dispatch(counteraction.sub({
            num : inputelement.current.value
      }));
      inputelement.current.value ="";
}
const handletoggle=()=>{
      dispatch(privacyaction.toggle());
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