import React from 'react';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
}

export default function NavItem({ icon, label }: NavItemProps) {
    return (
        <div 
            className="nav-item" 
            
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
            <div>
                {icon}
            </div>
            <span>
                {label}
            </span>
        </div>
    );
}