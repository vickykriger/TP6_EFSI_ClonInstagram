import React from 'react';
import type { User } from '../interfaz';
import '../index.css';

interface UserProfileMiniProps {
    usuario: User;
}

export default function UserProfileMini({ usuario }: UserProfileMiniProps) {
    return (
        <div >
            <div >
                <img 
                    src={usuario.imagen || 'https://via.placeholder.com/44'} 
                    alt={`Perfil de ${usuario.nombre}`}
                />
                <div >
                    <span >
                        {usuario.nombre}_
                    </span>
                </div>
            </div>
            <button >
                Switch
            </button>
        </div>
    );
}