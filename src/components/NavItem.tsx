import React from 'react';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

export default function NavItem({ icon, label, onClick }: NavItemProps) {
    return (
        <div 
            className="nav-item" 
            onClick={onClick}
            style={{ cursor: 'pointer' }}
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