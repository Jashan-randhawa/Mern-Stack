function Random(){/* 
  let math = math.random()*10; */
  let number = Math.random(100)*100;
  return <h3 style={{'background-color' : '#776697'}}>random number is :{number}</h3>
}

export default Random;