import React, { useState } from 'react';
import CommentSection from './CommentSection';
import type { Publicacion } from '../interfaz'; 

interface PostCardProps {
    publicacion: Publicacion;
}

function PostCard({ publicacion }: PostCardProps) {
    return (
        <>
            <div className="header-post">
                <h3>{publicacion.nombreUsuario}</h3>
                <img src={publicacion.imagen} alt="Publicación" className="post-image" />
                <div className="post-info">
                    <p>{publicacion.nombreUsuario}</p>
                    <p>{publicacion.descrpcion}</p>
                    <p>{publicacion.likes} Me gusta</p>
                    <p>{publicacion.fecha}</p>
                </div>
            </div>
            <CommentSection listaComentarios={publicacion.comentarios} />
        </>
    );
}

export default PostCard;