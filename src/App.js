import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router } from 'react-router-dom';

import ParticlesComponent from "./components/particles";
function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <Router>
        <Header />
      <HeroSection/>
      </Router>
      
    </div>
  );
}

export default App;
