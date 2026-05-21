import React from 'react';
import '../index.css';

export default function FooterLinks() {
    const links = ['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'];
    const anioActual = new Date().getFullYear();

    return (
        <div className='footer'>
            <div >
                {links.map((link, index) => (
                    <span key={index} style={{ cursor: 'pointer' }}>
                        {link} {index < links.length - 1 && '·'}
                    </span>
                ))}
            </div>
            <p >
                © {anioActual} INSTAGRAM FROM META
            </p>
        </div>
    );
}