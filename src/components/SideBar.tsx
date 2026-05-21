import React from 'react';
import NavItem from './NavItem';
import '../index.css';

interface SideBarProps {
    onGoHome: () => void;
    onGoToProfile: () => void;
}

export default function SideBar({ onGoHome, onGoToProfile }: SideBarProps) {
    return (
        <div className="sidebar-container">
            <div >
                <svg aria-label="Instagram" color="#000000" fill="#000000" height="29" role="img" viewBox="0 0 175 51" width="103">
                    <path d="M12.2 41.2c-.5... (tu svg completo)" />
                </svg>
            </div>
            <div>
                
                <NavItem 
                    label="Home" 
                    icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="24" width="24"><path d="M946.5 505L534.6 93.4a..."></path></svg>} 
                    onClick={onGoHome}
                />
                <NavItem label="Search" icon={<svg>...</svg>} />
                <NavItem label="Explore" icon={<svg>...</svg>} />
                <NavItem label="Reels" icon={<svg>...</svg>} />
                <NavItem label="Messages" icon={<svg>...</svg>} />
                <NavItem label="Notifications" icon={<svg>...</svg>} />
                <NavItem label="Create" icon={<svg>...</svg>} />
                <NavItem 
                    label="Profile" 
                    icon={<div >P</div>} 
                    onClick={onGoToProfile}
                />
            </div>
            <div style={{ marginTop: 'auto' }}>
                <NavItem 
                    label="More" 
                    icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>} 
                />
            </div>
        </div>
    );
}