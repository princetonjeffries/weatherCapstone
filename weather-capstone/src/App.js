import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AboutUs from './components/pages/AboutUs'
import index from './components/pages/index'
import Weather from './components/pages/Weather'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={index}/>
        <Route path='/weather' exact component={Weather}/>
        <Route path='/about' exact component={AboutUs}/>
      </Switch>
    </Router>
  );
}

export default App;
