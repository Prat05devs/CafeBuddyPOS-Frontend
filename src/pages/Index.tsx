import { AuthWrapper } from '../components/AuthWrapper';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { RestaurantProvider } from '@/contexts/RestaurantContext';
import { AuthProvider } from '@/contexts/AuthContext';

const Index = () => {
  // Debug: Add a console log to verify this component is being used
  console.log('✅ Index.tsx is being rendered - Real dashboard should load');
  
  return (
    <AuthProvider>
      <ThemeProvider>
        <RestaurantProvider>
          <div style={{ minHeight: '100vh' }}>
            <AuthWrapper />
          </div>
        </RestaurantProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Index;
