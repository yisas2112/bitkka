import Nabvar from './components/nabvar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import BotonesDePago from './components/BotonesDePago';
import VenderConBTC from './components/VenderConBTC';
import Beneficios from './components/Beneficios';
import Nosotros from './components/Nosotros';
import Contacto from './components//contacto';
import Tarifas from './components/Tarifas';
import Privacidad from './components/privacidad';
import Terminos from './components/Terminos';


function App() {
  return <>
  
  <BrowserRouter>
  <Nabvar/>
  <Switch>
    <Route exact path='/bitkka'>
      <Home/>
    </Route>
    <Route exact path="/bitkka/botonesdepago">
      <BotonesDePago/>
    </Route>
    <Route exact path='/bitkka/venderconbtc'>
      <VenderConBTC/>
    </Route>
    <Route exact path='/bitkka/beneficios'>
      <Beneficios/>
    </Route>
    <Route exact path='/bitkka/nosotros'>
      <Nosotros/>
    </Route>
    <Route exact path='/bitkka/contacto'>
      <Contacto/>
    </Route>
    <Route exact path='/bitkka/tarifas'>
      <Tarifas/>
    </Route>
    <Route exact path='/bitkka/privacidad'>
      <Privacidad/>
    </Route>
    <Route exact path='/bitkka/terminosycondiciones'>
      <Terminos/>
    </Route>
  </Switch>
  <Footer/>
  </BrowserRouter>
  
  
  
  </>
}

export default App;
