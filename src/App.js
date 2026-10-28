
// import './App.css';

// function App() {

//   let nombre = "ale"
//   const apellido = "delgado"
//   let datos = {
//     nombre1: 'raul',
//     apellido1: 'perez'
//   }
//   let array = [' uva', ' naranja', ' frutilla']


//   return (
//     <div className="App">

//       <h1>el nombre es {datos.nombre1} y el apellido es {datos.apellido1}</h1>
//       <h1>y su apodo es {array[0]}</h1>

//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Inicio from './pages/Inicio';
import ProyectoBlob from './pages/ProyectoBlob';
import './App.css';

function App() {
  return (
    <Router>
      
      <Header /> 
      
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyecto" element={<ProyectoBlob />} />
        
        <Route path="/acerca" element={<div style={{textAlign:'center', marginTop:'50px'}}><h2>Acerca de</h2></div>} />
        <Route path="/contacto" element={<div style={{textAlign:'center', marginTop:'50px'}}><h2>Contacto</h2></div>} />
      </Routes>
    </Router>
  );
}

export default App;


