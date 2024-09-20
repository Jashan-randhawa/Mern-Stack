import './App.css'
import Clockheading from './component/clockheading';
import  Clockslogan from './component/clockslogan';
import Currenttime from './component/currenttime';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return<div>
    <Clockheading></Clockheading>
    <Clockslogan></Clockslogan>
    <Currenttime></Currenttime>
  </div>
}

export default App
