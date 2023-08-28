import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const Comentario = ({nombreUsuario, fecha, comentario, calificacion, hora, posicion, setComentarios, comments}) => { //Element tiene los atributos de cada cita + su key
    const eliminarComentario = () => { //La función debería pasar el setcitas con la lista de citas, sin la cita cuya key es pasada por parámetro
        /*
        element.citas.removeChild(lastElement);
        element.setCitas([])*/
        var lista1 = comments.slice(0, posicion)
        var lista2 = comments.slice(posicion+1, comments.length)

        setComentarios(lista1.concat(lista2))
    }

    return (<div className="comentario">
    <p><span>{nombreUsuario}</span></p>
    <p><span>{calificacion}</span></p>
    <p><span>{comentario}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <button className="button.elimnar u-full-width" onClick={eliminarComentario}>Eliminar
        ×</button>
</div>)
}

export default Comentario