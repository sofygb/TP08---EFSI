import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom/client';


const puntosVerdes = ["Armenia 1809", "Medrano, Charcas y, 1746 Palermo", "Antezana 355", "Bulnes, Sarmiento y, 1176"]

const select = document.getElementById("puntoVerde");

puntosVerdes.forEach(element => {
    const option = document.createElement("option");
    option.value = element;
    option.textContent = element;
    select.appendChild(option);
});

const MyForm = ({comments, setComentarios}) => {
    const updateComentario = () => {
        const nuevoComentario = {
            puntoVerde: document.getElementById("puntoVerde").value,
            nombreUsuario: document.getElementById("nombreUsuario").value, 
            calificacion: document.getElementById("calificacion").value,
            comentario: document.getElementById("comentario").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value
        } 
        
        setComentarios([...comments, nuevoComentario]); //el push del array causó errores. Preferentemente usar esta sintaxis.
    }
    return (
        <div className="one-half column">
            <h2>Reseñas</h2>
        <div>
        <label for="puntoVerde">Elegi un punto Verde:</label>
            <select name="puntoVerde" id="puntoVerde">
            </select>
            <br></br>
            <label>Usuario </label>
            <input type="text" name="username" className="u-full-width" placeholder="Nombre de Usuario"  id="nombreUsuario" />
            <br></br>
            <label>Calificacion </label>
            <input type="text" name="calif" className="u-full-width" placeholder="Calificacion entre 1 y 5" id="calificacion" min="1" max="5"/>
            <br></br>
            <label>Comentario </label>
            <input type="text" name="comment" className="u-full-width"  id="comentario" />
            <br></br>
            <label>Fecha </label>
            <input type="date" name="fecha" className="u-full-width"  id="fecha" />
            <br></br>
            <label>Hora </label>
            <input type="time" name="hora" className="u-full-width"  id="hora" />
            <br></br><br></br>
            <button type="button" className="u-full-width button-primary" onClick={updateComentario}>Aceptar</button>
        </div>
    </div>
        
    )
}

export default MyForm;