import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AboutUs from './components/pages/AboutUs/AboutUs'
import index from './components/pages/index'
import Weather from './components/pages/Weather'
import Stories from './components/pages/Stories'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={index}/>
        <Route path='/weather'  component={Weather}/>
        <Route path='/about'  component={AboutUs}/>
        <Route path='/stories'  component={Stories}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
