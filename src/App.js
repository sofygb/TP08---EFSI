import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Mapa from './components/Mapa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route index element={<Mapa />}></Route>
          <Route path='*' element={<h1>Not Found</h1>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
