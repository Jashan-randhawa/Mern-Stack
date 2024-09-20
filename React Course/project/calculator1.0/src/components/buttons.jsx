import style from './buttons.module.css'
const Button = () =>{

const buttonname =['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  return<div className={style.buttoncontainer} >
    {buttonname.map((item)=>{
      return <button className={style.button} >{item}</button>
    })}
      </div>
}
export default Button;