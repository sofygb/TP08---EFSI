import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Mapa from './components/Mapa';
import Informacion from './components/Informacion';
import Nav from './components/Nav';
import "./styles.css";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Nav />
      <Routes> 
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>

        <Route path='/mapa' element={<Mapa />} ></Route>
        <Route path='/informacion' element={<Informacion />} ></Route>
        
        <Route path='*' element={<h1>Not Found</h1>} ></Route>
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*Routes replaces the switch component */
