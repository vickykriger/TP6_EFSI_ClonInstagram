import React from 'react';
import type { Publicacion } from '../interfaz';
import GridItem from './GridItem';
import '../index.css';

interface ProfileGridProps {
    publicaciones: Publicacion[];
}

export default function ProfileGrid({ publicaciones }: ProfileGridProps) {
    if (!publicaciones || publicaciones.length === 0) {
        return (
            <div className='no-post'>
                No posts yet.
            </div>
        );
    }
    return (
        <div className='profile-grid'>
            {publicaciones.map((post, index) => (
                <GridItem key={index} publicacion={post} />
            ))}
        </div>
    );
}