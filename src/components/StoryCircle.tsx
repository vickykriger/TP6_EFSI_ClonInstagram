import React from 'react';
import '../index.css';

interface StoryCircleProps {
    imagen: string;
    nombreUsuario: string;
}

export default function StoryCircle({ imagen, nombreUsuario }: StoryCircleProps) {
    return (
        <div className="story-circle-wrapper">
                <img 
                    src={imagen || 'https://via.placeholder.com/60'} 
                    alt={`Story de ${nombreUsuario}`} 
                />
            <span>{nombreUsuario}</span>
        </div>
    );
}