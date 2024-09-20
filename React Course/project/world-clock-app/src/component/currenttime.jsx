let Currenttime=()=>{
  let time = new Date();
  return <p className="lead">This current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
};
export default Currenttime;