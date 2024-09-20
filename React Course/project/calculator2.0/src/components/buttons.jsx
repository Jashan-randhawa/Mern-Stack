import style from './buttons.module.css'
const Button = ({onbuttonclick}) =>{

const buttonname =['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  return<div className={style.buttoncontainer} >
    {buttonname.map((buttonname)=>{
      return <button className={style.button} onClick={() => onbuttonclick(buttonname)}>{buttonname}</button>
    })}
      </div>
}
export default Button;