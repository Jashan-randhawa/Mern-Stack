import { useSelector } from "react-redux";

const Displaycounter =()=>{
  const { counterVal } = useSelector((store )=> store.counter )
  return<>
   <p className="lead mb-4">
    Counter cureent Value { counterVal }
    </p>
    </>
}
export default Displaycounter;