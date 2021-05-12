import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import AboutUs from './components/pages/AboutUs/AboutUs'
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
