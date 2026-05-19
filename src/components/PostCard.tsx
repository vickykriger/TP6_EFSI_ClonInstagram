import React from 'react';
import type { Publicacion } from '../interfaz';
import CommentSection from './CommentSection';

interface PostCardProps {
    publicacion: Publicacion;
    onSelect: () => void;
    onSelectUser: () => void;
}

export default function PostCard({ publicacion, onSelect, onSelectUser }: PostCardProps) {
    return (
        <div className="post-card-container">
            <div className="post-header" onClick={onSelectUser}>
                <span>{publicacion.nombreUsuario}</span>
            </div>

            <div className="post-image" onClick={onSelect}>
                <img src={publicacion.imagen} alt="Contenido" />
            </div>

            <div className="post-info">
                <p>{publicacion.likes} likes</p>
                <p>
                    <strong onClick={onSelectUser}>{publicacion.nombreUsuario}</strong> {publicacion.descrpcion}
                </p>
            </div>

            <div className="view-comments-trigger" onClick={onSelect}>
                Ver los {publicacion.comentarios?.length || 0} comentarios...
            </div>

            <CommentSection listaComentarios={publicacion.comentarios} />
        </div>
    );
}