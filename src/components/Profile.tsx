import React from 'react';
import type { User } from '../interfaz';
import ProfileHeader from './ProfileHeader';
import ProfileGrid from './ProfileGrid';
import '../index.css';

interface ProfileProps {
    usuario: User;
}
export default function Profile({ usuario }: ProfileProps) {
    return (
        <div className="profile-page-container">
            <ProfileHeader usuario={usuario} />
            <ProfileGrid publicaciones={usuario.publicaciones} />
        </div>
    );
}