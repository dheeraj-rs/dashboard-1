'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  FileText,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/users', label: 'Users', icon: Users },
  { href: '/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/reports', label: 'Reports', icon: FileText },
  { href: '/messages', label: 'Messages', icon: MessageSquare },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside 
      className={`dashboard__sidebar ${collapsed ? 'dashboard__sidebar--collapsed' : ''} ${!isOpen ? 'dashboard__sidebar--mobile-hidden' : ''}`}
    >
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">
          D
        </div>
        <span className="sidebar__logo-text">Dashboard</span>
      </div>
      
      <nav className="sidebar__nav">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`}
            >
              <Icon />
              <span className="sidebar__nav-text">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <button
        className="sidebar__nav-item"
        onClick={toggleCollapsed}
        style={{ 
          position: 'absolute', 
          bottom: '20px', 
          left: '0',
          right: '0',
          margin: '0 16px'
        }}
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
        <span className="sidebar__nav-text">
          {collapsed ? 'Expand' : 'Collapse'}
        </span>
      </button>
    </aside>
  );
}