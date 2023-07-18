import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      {/* <StateTutorial/>
      <ReducerExample/>
      <EffectExample/> */}
      <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
