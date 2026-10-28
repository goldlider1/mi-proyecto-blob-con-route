import React, { useState } from 'react';
import './ProyectoBlob.css'; 

const ProyectoBlob = () => {
  
  const [resultado, setResultado] = useState("");
  // Guardamos el blob en una variable de estado
  const [blob, setBlob] = useState(null);

  
  const crearBlob = () => {
    const texto = "Hola! Este es un ejemplo de Blob en JavaScript.";
    const nuevoBlob = new Blob([texto], { type: "text/plain" });
    setBlob(nuevoBlob);
    setResultado("✅ Blob creado con texto.");
  };

 
  const descargarBlob = () => {
    if (!blob) {
      alert("Primero crea un Blob.");
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ejemplo.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  
  const sliceBlob = () => {
    if (!blob) {
      alert("Primero crea un Blob.");
      return;
    }
    const nuevoBlob = blob.slice(0, 10, "text/plain");
    const lector = new FileReader();
    lector.onload = function () {
      setResultado("Contenido del slice(): " + lector.result);
    };
    lector.readAsText(nuevoBlob);
  };

  return (
    <div className="blob-container">
      <h1>Ejemplo de uso de Blobs</h1>
      <button onClick={crearBlob}>Crear Blob de texto</button>
      <button onClick={descargarBlob}>Descargar Blob</button>
      <button onClick={sliceBlob}>Usar slice()</button>
      <p className="resultado">{resultado}</p>
    </div>
  );
};

export default ProyectoBlob;
