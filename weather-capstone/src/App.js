import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div className="App">
      <h1>Arizona Weather</h1>

      <AboutUs component={AboutUs} />
    </div>
  );
}

export default App;
