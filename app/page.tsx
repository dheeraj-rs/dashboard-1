import { DashboardLayout } from '@/components/DashboardLayout';
import { StatCard } from '@/components/StatCard';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  ShoppingCart,
  Activity,
  Clock
} from 'lucide-react';

export default function Home() {
  return (
    <DashboardLayout>
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: '700', 
            color: 'var(--color-text-primary)',
            margin: '0 0 0.5rem 0'
          }}>
            Welcome back!
          </h1>
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            fontSize: 'var(--font-size-base)' 
          }}>
            Here's what's happening with your business today.
          </p>
        </div>

        <div className="stats-grid">
          <StatCard
            title="Total Users"
            value="2,543"
            change={{ value: 12, trend: 'up' }}
            icon={Users}
            iconColor="primary"
          />
          <StatCard
            title="Revenue"
            value="$45,231"
            change={{ value: 8, trend: 'up' }}
            icon={DollarSign}
            iconColor="success"
          />
          <StatCard
            title="Orders"
            value="1,234"
            change={{ value: 3, trend: 'down' }}
            icon={ShoppingCart}
            iconColor="warning"
          />
          <StatCard
            title="Conversion Rate"
            value="3.24%"
            change={{ value: 5, trend: 'up' }}
            icon={TrendingUp}
            iconColor="primary"
          />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: 'var(--space-4)' 
        }}>
          <div className="card">
            <div className="card__header">
              <h3>Recent Activity</h3>
              <p>Latest user interactions</p>
            </div>
            <div className="card__body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {[
                  { user: 'John Doe', action: 'Created new account', time: '2 minutes ago' },
                  { user: 'Jane Smith', action: 'Completed purchase', time: '5 minutes ago' },
                  { user: 'Mike Johnson', action: 'Updated profile', time: '10 minutes ago' },
                  { user: 'Sarah Wilson', action: 'Left a review', time: '15 minutes ago' },
                ].map((activity, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-3)',
                    padding: 'var(--space-2)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      fontWeight: '600'
                    }}>
                      {activity.user.charAt(0)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontWeight: '500', 
                        color: 'var(--color-text-primary)',
                        fontSize: 'var(--font-size-sm)'
                      }}>
                        {activity.user}
                      </div>
                      <div style={{ 
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-xs)'
                      }}>
                        {activity.action}
                      </div>
                    </div>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-1)',
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-xs)'
                    }}>
                      <Clock size={12} />
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <h3>Performance Metrics</h3>
              <p>Key performance indicators</p>
            </div>
            <div className="card__body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { label: 'Page Views', value: 85, color: 'var(--color-primary)' },
                  { label: 'Sessions', value: 72, color: 'var(--color-success)' },
                  { label: 'Bounce Rate', value: 34, color: 'var(--color-warning)' },
                  { label: 'Load Time', value: 91, color: 'var(--color-error)' },
                ].map((metric, index) => (
                  <div key={index}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: 'var(--space-1)'
                    }}>
                      <span style={{ 
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-primary)'
                      }}>
                        {metric.label}
                      </span>
                      <span style={{ 
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '600',
                        color: 'var(--color-text-primary)'
                      }}>
                        {metric.value}%
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: 'var(--color-background-tertiary)',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${metric.value}%`,
                        height: '100%',
                        backgroundColor: metric.color,
                        transition: 'width 0.5s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}