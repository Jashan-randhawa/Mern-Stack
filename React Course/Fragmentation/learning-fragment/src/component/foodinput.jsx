import style from './foodinput.module.css'
const Foodinput = ({handlekeydown})=>{
  return<input type="text" placeholder='Enter food item here' className={style.foodinput} onKeyDown={handlekeydown} />
};
export default Foodinput;