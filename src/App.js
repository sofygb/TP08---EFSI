import './App.css';
import "./styles.css";
import React from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Listado from './components/Listado';
import MyForm from './components/Formulario';
import Informacion from './components/Informacion';
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
        <Route path='/informacion' element={<Informacion />} ></Route>
        
        <Route path='*' element={<h1>Not Found</h1>} ></Route>
        </Route> 
      </Routes> <br></br>
      <div className="container flex" style={{maxWidth: "100%", marginLeft:"3rem", textAlign:"left"}}>
      <div className="row">
      <MyForm comments={comments} setComentarios={setComentarios}></MyForm>
      </div> 
      <Listado comments={comments} setComentarios={setComentarios} />
      </div>
    </div> 
    </BrowserRouter>
    
  );
}

export default App;

/*Routes replaces the switch component */
