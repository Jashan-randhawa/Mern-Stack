
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Displaycounter from './components/Displaycounter'
import Container from './components/Container'
import Control from './components/control'
import { useSelector } from 'react-redux'
import Privacymessage from './components/privacymessage'

function App() {
  const value = useSelector((store) => store.privacy)
 return<>
<center className="px-4 py-5 my-5 text-center">
  <Container>
    <h1 className="display-5 fw-bold text-body-emphasis"><Header></Header></h1>
    <div className="col-lg-6 mx-auto">
     {value === true?<Privacymessage/> : <Displaycounter/>}
     <Control></Control>
    </div>
    </Container>
  </center>
 </> 
}

export default App
