'use client';

import { ThemeToggle } from './ThemeToggle';
import { Menu, Search, Bell, User } from 'lucide-react';

interface DashboardHeaderProps {
  onMenuToggle: () => void;
}

export function DashboardHeader({ onMenuToggle }: DashboardHeaderProps) {
  return (
    <header className="dashboard__header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="mobile-menu-toggle" onClick={onMenuToggle}>
          <Menu />
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, maxWidth: '400px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search 
              style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: 'var(--color-text-tertiary)'
              }} 
            />
            <input
              type="text"
              placeholder="Search..."
              className="input"
              style={{ paddingLeft: '2.5rem' }}
            />
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="btn btn--ghost">
          <Bell style={{ width: '18px', height: '18px' }} />
        </button>
        
        <ThemeToggle />
        
        <button className="btn btn--ghost">
          <User style={{ width: '18px', height: '18px' }} />
        </button>
      </div>
    </header>
  );
}