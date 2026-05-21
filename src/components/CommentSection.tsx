import React from 'react';
import type { Comentario } from '../interfaz';
import '../index.css';

interface CommentSectionProps {
    listaComentarios: Comentario[];
}

function CommentSection({ listaComentarios }: CommentSectionProps) {
    if (!listaComentarios || listaComentarios.length === 0) {
        return <div>No hay comentarios aún.</div>;
    }

    return (
        <div className="comments-list">
            {listaComentarios.map((item, index) => (
                <div key={index} className="comment-item">
                    <div>
                        <span >
                            {item.nombreUsuario}
                        </span>
                        <span>{item.comentario}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentSection;