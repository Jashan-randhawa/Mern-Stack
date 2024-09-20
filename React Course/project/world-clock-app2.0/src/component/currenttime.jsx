import { useEffect, useState } from "react";

let Currenttime=()=>{
  const [time,settime] = useState(new Date());
  useEffect(()=>{
    const intervalid = setInterval(()=>{
      settime(new Date());
    },100)

    return()=>{
      clearInterval(intervalid);
    }
  },[]);
  return <p className="lead">This current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
};
export default Currenttime;