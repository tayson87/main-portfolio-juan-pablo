import './App.css';
import { HashRouter, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Aboutme from './component/Aboutme';
import Proyect from './component/Proyect';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/proyect" element={<Proyect />} />
        </Routes>
      </HashRouter>
      
     
    </div>
  );
}

export default App;
