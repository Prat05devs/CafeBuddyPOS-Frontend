import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoginForm } from '@/components/LoginForm';
import { RestaurantApp } from '@/components/RestaurantApp';
import { Button } from '@/components/ui/button';

export const AuthWrapper: React.FC = () => {
  const { user, logout, isLoading } = useAuth();

  console.log('🔍 AuthWrapper render - user:', user, 'isLoading:', isLoading);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div>
      {/* Add a logout button in the header */}
      <div className="bg-card shadow-sm border-b border-border">
        <div className="flex justify-between items-center px-6 py-3">
          <h1 className="text-lg font-semibold text-card-foreground">Welcome, {user.firstName} {user.lastName}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground capitalize">{user.role}</span>
            <Button variant="outline" size="sm" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      <RestaurantApp />
    </div>
  );
};
