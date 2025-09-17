import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down';
  };
  icon: LucideIcon;
  iconColor?: 'primary' | 'success' | 'warning' | 'error';
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  iconColor = 'primary' 
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card__header">
        <span className="stat-card__title">{title}</span>
        <div className={`stat-card__icon stat-card__icon--${iconColor}`}>
          <Icon size={20} />
        </div>
      </div>
      
      <div className="stat-card__value">{value}</div>
      
      {change && (
        <div className={`stat-card__change stat-card__change--${change.trend === 'up' ? 'positive' : 'negative'}`}>
          {change.trend === 'up' ? '↗' : '↘'} {Math.abs(change.value)}%
          <span style={{ color: 'var(--color-text-tertiary)', marginLeft: '0.25rem' }}>
            vs last month
          </span>
        </div>
      )}
    </div>
  );
}