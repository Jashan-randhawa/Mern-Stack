import { useSelector } from "react-redux";

const Displaycounter =()=>{
  const counter = useSelector((store )=> store.counter )
  return<>
   <p className="lead mb-4">
    Counter cureent Value {counter}
    </p>
    </>
}
export default Displaycounter;