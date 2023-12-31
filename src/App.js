import './App.css';
import "./styles.css";
import React from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Listado from './components/Listado';
import MyForm from './components/Formulario';
import Creaciones from './components/Creaciones';
import Favoritos from './components/Favoritos';
import AboutUs from './components/Aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [comments, setComentarios] = React.useState([])
  console.log("comentario", comments)
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes> 
        <Route path='/' element={<Nav />}>
        <Route index element={<Home />}></Route>
        <Route path='/creaciones' element={<Creaciones />} ></Route>
        <Route path='/favoritos' element={<Favoritos />} ></Route>
        <Route path='/aboutus' element={<AboutUs />} ></Route>
        <Route path='*' element={<h1>Not Found</h1>} ></Route>
        </Route> 
      </Routes> <br></br>
    </div> 
    </BrowserRouter>
    
  );
}

export default App;

/*Routes replaces the switch component */
