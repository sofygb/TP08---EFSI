import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import '../App.css';

const Comentario = ({puntoVerde, nombreUsuario, fecha, comentario, calificacion, hora, posicion, setComentarios, comments}) => { //Element tiene los atributos de cada cita + su key
    const eliminarComentario = () => { //La función debería pasar el setcitas con la lista de citas, sin la cita cuya key es pasada por parámetro
        /*
        element.citas.removeChild(lastElement);
        element.setCitas([])*/
        var lista1 = comments.slice(0, posicion)
        var lista2 = comments.slice(posicion+1, comments.length)

        setComentarios(lista1.concat(lista2))
    }

    return (
        <div className="comentario-card">
  <div className="comentario-content">
    <p className="comentario-title">Punto Verde: <span>{puntoVerde}</span></p>
    <p className="comentario-username">{nombreUsuario}</p>
    <div className="comentario-rating">
      <span>Calificación:</span>
      <div className="rating-stars">
        {Array.from({ length: calificacion }, (_, index) => (
          <span key={index} className="star-icon">★</span>
        ))}
      </div>
    </div>
    <p className="comentario-text">{comentario}</p>
    <p className="comentario-date">Fecha: <span>{fecha}</span></p>
    <p className="comentario-time">Hora: <span>{hora}</span></p>
    <button className="eliminar-button" onClick={eliminarComentario}>Eliminar ×</button>
  </div>
</div>


    )

}

export default Comentario