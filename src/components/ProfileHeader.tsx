import React from 'react';
import type { User } from '../interfaz';
import '../index.css';

interface ProfileHeaderProps {
    usuario: User;
}

export default function ProfileHeader({ usuario }: ProfileHeaderProps) {
    return (
        <header className="profile-header" >
                <div className='profile-image'>
                    <img 
                        src={usuario.imagen} 
                        alt={`Foto de ${usuario.nombre}`} 
                    />
                </div>

            <div className='profile-info' >
                <div >
                    <h2 >{usuario.nombre}</h2>
                    <button >Following</button>
                    <button >Message</button>
                    <button >•••</button>
                </div>

                <div >
                    <span><strong >{usuario.publicaciones.length}</strong> posts</span>
                    <span><strong >{usuario.cantSeguidores.toLocaleString()}</strong> followers</span>
                    <span><strong >{usuario.cantSeguidos.toLocaleString()}</strong> following</span>
                </div>

                <div >
                    <h1>{usuario.nombre}</h1>
                    <p >{usuario.biografia}</p>
                </div>
            </div>
        </header>
    );
}