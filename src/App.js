import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Informacion from './components/Informacion';
import "./styles.css";
import Nav from "./components/Nav";
import React from 'react';


function App() {
  const [comments, setComentarios] = React.useState([])
  console.log("comentario", comments)

  return (
    <BrowserRouter>
    <div className="App">
      <Routes> 
        <Route path='/' element={<Nav />}>
        <Route index element={<Home />}></Route>
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
