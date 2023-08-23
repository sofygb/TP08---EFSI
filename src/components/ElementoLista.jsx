import React from "react";

const ElementoLista = (props) => {
    return (
            <div class="comentario">
                <p>Usuario: <span>{props.nombreUsuario}</span></p>
                <p>Calificacion: <span>{props.calificacion}</span></p>
                <p>Comentario: <span>{props.texto}</span></p>
                <p>Fecha: <span>{props.fecha}</span></p>
                <p>Hora: <span>{props.hora}</span></p>
                <button class="button.elimnar u-full-width">Eliminar
                    ×</button>
            </div>
    )
}

export default ElementoLista;