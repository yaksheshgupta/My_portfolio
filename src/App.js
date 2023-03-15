import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home.js';
import About from './component/about';
import Work from './component/work';
import Contact from './component/contact';
function App() {
  return (
    <div >
      <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/work' element={<Work/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
