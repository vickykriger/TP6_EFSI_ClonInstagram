import React from 'react';
import NavItem from './NavItem';

export default function SideBar() {
    return (
        <div className="sidebar-container">
            <div style={{ padding: '25px 12px 35px 12px' }}>
                <svg aria-label="Instagram" color="#000000" fill="#000000" height="29" role="img" viewBox="0 0 175 51" width="103">
                    <path d="M12.2 41.2c-.5 0-1-.2-1.4-.6l-4-4c-.8-.8-.8-2 0-2.8l4-4c.7-.8 2-.8 2.8 0 .8.8.8 2 0 2.8l-1.1 1.1h5.8c4.4 0 8-3.6 8-8s-3.6-8-8-8H6.5c-1.1 0-2-.9-2-2s.9-2 2-2h11.8c6.6 0 12 5.4 12 12s-5.4 12-12 12h-5.8l1.1 1.1c.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6zm31.7-1.1c-1.1 0-2-.9-2-2V18.3c0-1.1.9-2 2-2s2 .9 2 2v19.8c0 1.1-.9 2-2 2zm0-25.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm27.4 25.5c-5.4 0-9.4-3.5-9.4-9.2v-11c0-1.1.9-2 2-2s2 .9 2 2v10.9c0 3.7 2.3 5.3 5.4 5.3 3.3 0 5.6-2 5.6-5.8V18.3c0-1.1.9-2 2-2s2 .9 2 2v16.1c0 6.1-4.2 8.3-9.6 8.3zm21.6-.2c-1.1 0-2-.9-2-2V18.3c0-1.1.9-2 2-2s2 .9 2 2v1.5c1.4-1.8 3.6-2.1 4.7-2.1 1.1 0 2 .9 2 2s-.9 2-2 2c-.3 0-2.3 0-3.7 1.9-.7.9-1 2.1-1 3.4v12.8c0 1.1-.9 2-2 2zm20.8.2c-5.8 0-9.8-3.9-9.8-9.8s4-9.8 9.8-9.8 9.8 3.9 9.8 9.8-4 9.8-9.8 9.8zm0-15.6c-3.4 0-5.8 2.4-5.8 5.8s2.4 5.8 5.8 5.8 5.8-2.4 5.8-5.8-2.4-5.8-5.8-5.8zm22.4 15.6c-5.5 0-9.6-3.8-9.6-9.6s3.9-9.7 9.4-9.7c2.8 0 5.1 1.1 6.5 2.9v-6.6c0-1.1.9-2 2-2s2 .9 2 2v20.6c0 4.9-3 7.8-8.2 7.8-3.4 0-6.1-1.4-7.2-3.8-1-.1-1.6-.9-1.5-1.9.1-1 1-1.6 1.9-1.5.5.1 1 .3 1.5.3 2.7 0 4.3-1.4 4.3-4.2v-.8c-1.4 1.7-3.8 2.5-5.3 2.5zm.5-15.4c-3.2 0-5.5 2.3-5.5 5.6s2.3 5.6 5.5 5.6 5.5-2.3 5.5-5.6-2.3-5.6-5.5-5.6zm23.2 15.4c-1.1 0-2-.9-2-2V18.3c0-1.1.9-2 2-2s2 .9 2 2v1.5c1.4-1.8 3.6-2.1 4.7-2.1 1.1 0 2 .9 2 2s-.9 2-2 2c-.3 0-2.3 0-3.7 1.9-.7.9-1 2.1-1 3.4v12.8c0 1.1-.9 2-2 2z" />
                </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: 1 }}>
                
                <NavItem 
                    label="Home" 
                    icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="24" width="24"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h128v224h250.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5zM804.9 860H656V644c0-17.7-14.3-32-32-32H400c-17.7 0-32 14.3-32 32v216H219.1V534.3h585.7V860z"></path></svg>} 
                />
                <NavItem 
                    label="Search" 
                    icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>} 
                />
                <NavItem 
                    label="Explore" 
                    icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>} 
                />
                <NavItem 
                    label="Reels" 
                    icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h18M3 16h18M3 12h18"></path></svg>} 
                />
                <NavItem 
                    label="Messages" 
                    icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>} 
                />
                <NavItem 
                    label="Notifications" 
                    icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>} 
                />
                <NavItem 
                    label="Create" 
                    icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>} 
                />
                <NavItem 
                    label="Profile" 
                    icon={<div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>P</div>} 
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