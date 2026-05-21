import React from 'react';
import type { User } from '../interfaz';
import '../index.css';

interface StoriesBarProps {
    usuarios: User[];
    onSelectUser: (user: User) => void;
}
export default function StoriesBar({ usuarios, onSelectUser }: StoriesBarProps) {
    return (
        <div className="stories-bar-container">
            {usuarios.map((user, index) => (
                <div 
                    key={index} 
                    className="story-circle-item" 
                    onClick={() => onSelectUser(user)} 
                >
                    <img src={user.imagen} alt={user.nombre} />
                    <p>{user.nombre}</p>
                </div>
            ))}
        </div>
    );
}