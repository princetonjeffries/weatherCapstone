import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import AboutUs from './components/pages/AboutUs'
function App() {
  return (
    <Router>
      <Navbar />
      <AboutUs />
    </Router>
  );
}

export default App;
