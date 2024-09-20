import style from './display.module.css';

const Display =({displayvalue}) =>{
  return<input className={style.display} type="text" value={displayvalue} readOnly />
};
export default Display;