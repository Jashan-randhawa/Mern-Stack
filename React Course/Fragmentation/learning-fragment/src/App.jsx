import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooditem from './component/fooditem';
import Errormessage from './component/error';
import Container from './component/container';
import Foodinput from './component/foodinput';
import { useState } from 'react';

function App() {
  //let fooditem =[];
 let [fooditem , setfooditem] = useState([]);
  const handlekeydown = (event)=>{
    if(event.key === "Enter"){
      let newfooditem = event.target.value;
      event.target.value="";
      let newitem = [...fooditem,newfooditem];
      setfooditem(newitem);
      console.log("food value entered is : " + newfooditem)
    }
    };
  return<>
  <Container>
  <h1>Healthy Food</h1>
  <Errormessage items={fooditem}></Errormessage>
  <Foodinput handlekeydown={handlekeydown} ></Foodinput>
  <p></p>
  <Fooditem items={fooditem} ></Fooditem>
  {/* <ul class="list-group">
  <li class="list-group-item">dal</li>
  <li class="list-group-item">green vegetable</li>
  <li class="list-group-item">Salad</li>
  <li class="list-group-item">Chappati</li>
  <li class="list-group-item">Panner</li>
</ul> */}
</Container>
<Container>
  <p>Above is the list of healthy food that are good for your health and well being</p>
</Container>
</>
}

export default App
