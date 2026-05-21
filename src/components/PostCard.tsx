import React from 'react';
import type { Publicacion } from '../interfaz';
import CommentSection from './CommentSection';
import type { User } from '../interfaz';
import '../index.css';

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
            <div className="post-interactions">
                <button>❤️</button>
                <button>💬</button>
              </div>
            <div className="view-comments-trigger" onClick={onSelect}>
                Ver los {publicacion.comentarios?.length || 0} comentarios...
            </div>

            <CommentSection listaComentarios={publicacion.comentarios} />
        </div>
    );
}