import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom/client';

const MyForm = ({comments, setComentarios}) => {
    const updateComentario = () => {
        const nuevoComentario = {
            nombreUsuario: document.getElementById("nombreUsuario").value, 
            calificacion: document.getElementById("calificacion").value,
            texto: document.getElementById("texto").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value
        } 
        
        setComentarios([...comments, nuevoComentario]); //el push del array causó errores. Preferentemente usar esta sintaxis.
    }
    return (
        <div className="one-half column">
            <h1>Reseña</h1>
        <div>
            <label>Nombre Usuario</label>
            <input type="text" name="username" className="u-full-width" placeholder="Nombre de Usuario"  id="nombre" />
            
            <label>Calificacion</label>
            <input type="text" name="calif" className="u-full-width" placeholder="Calificacion" id="calificacion" />

            <label>Comentario</label>
            <input type="text" name="comment" className="u-full-width"  id="comentario" />

            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width"  id="fecha" />

            <label>Hora</label>
            <input type="time" name="hora" className="u-full-width"  id="hora" />

            <button type="button" className="u-full-width button-primary" onClick={updateComentario}>Aceptar</button>
        </div>
    </div>
        
    )
}

export default MyForm;