import React, { useState } from 'react';
import type { Publicacion } from '../interfaz';

interface GridItemProps {
    publicacion: Publicacion;
}

export default function GridItem({ publicacion }: GridItemProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img 
                src={publicacion.imagen} 
                alt="Post de perfil" 
            />

            {hovered && (
                <div >
                    <div >
                        ❤️ <span>{publicacion.likes}</span>
                    </div>
                    <div >
                        💬 <span>{publicacion.comentarios ? publicacion.comentarios.length : 0}</span>
                    </div>
                </div>
            )}
        </div>
    );
}