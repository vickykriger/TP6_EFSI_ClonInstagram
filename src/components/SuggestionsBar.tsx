import React from 'react';
import type { User } from '../interfaz';
import UserProfileMini from './UserProfileMini';
import FooterLinks from './FooterLinks';

interface SuggestionsBarProps {
    listaSugeridos: User[];
    onSelectUser: (user: User) => void;
}

export default function SuggestionsBar({ listaSugeridos, onSelectUser }: SuggestionsBarProps) {
    const usuarioActual = listaSugeridos[0];
    const sugerencias = listaSugeridos.slice(1);

    return (
        <div className="suggestions-bar-container">
            
            {usuarioActual && (
                <div onClick={() => onSelectUser(usuarioActual)}>
                    <UserProfileMini usuario={usuarioActual} />
                </div>
            )}

            <div className="suggestions-header">
                <span>Suggestions for you</span>
            </div>

            <div className="suggestions-list">
                {sugerencias.map((user, index) => {
                    const subtitulosFalsos = ['Follows you', 'Followed by chirag_singla17', 'New to Instagram'];
                    const subtexto = subtitulosFalsos[index % subtitulosFalsos.length];

                    return (
                        <div key={index} className="suggestion-item-row">
                            <div className="suggestion-user-info">
                                <img 
                                    src={user.imagen || 'https://via.placeholder.com/32'} 
                                    alt={`Sugerencia ${user.nombre}`} 
                                    onClick={() => onSelectUser(user)}
                                />
                                <div className="suggestion-texts">
                                    <span onClick={() => onSelectUser(user)}>
                                        {user.nombre}
                                    </span>
                                    <span>
                                        {subtexto}
                                    </span>
                                </div>
                            </div>
                            
                            <button className="follow-btn">
                                Follow
                            </button>
                        </div>
                    );
                })}
            </div>

            <FooterLinks />
        </div>
    );
}