'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="theme-toggle" disabled>
        <div className="spinner" />
      </button>
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getThemeIcon = () => {
    if (theme === 'system') {
      return <Monitor />;
    }
    return currentTheme === 'dark' ? <Moon /> : <Sun />;
  };

  const getThemeLabel = () => {
    if (theme === 'system') {
      return `Auto (${systemTheme})`;
    }
    return theme === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <button
      className="theme-toggle"
      onClick={cycleTheme}
      title={`Current theme: ${getThemeLabel()}. Click to cycle through themes.`}
    >
      {getThemeIcon()}
      <span className="sr-only">{getThemeLabel()}</span>
    </button>
  );
}