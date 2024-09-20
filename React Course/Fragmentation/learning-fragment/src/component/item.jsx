import style from './item.module.css'
const Item=({fooditem,bought,handlebuybutton})=>{
  /* const handlebuybuttonclicked = (event) =>{
    console.log(event);
    console.log(`${fooditem} being bought`)
  } */
  return<div className={`container ${style.container}`}>
    <div className='row'>
    <li className={`list-group-item col-8 ${bought && 'active'} ${style.list}`}>{fooditem}</li>
    <button className={`col-3 btn btn-info ${style.button}`}
    onClick={handlebuybutton}   
   >Buy</button>
    </div>
    </div>
};

export default Item;