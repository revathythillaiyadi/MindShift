import { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';
import { BackgroundMusic } from './components/BackgroundMusic';

function App() {
  const { user, loading } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <>
      <BackgroundMusic />
      {loading ? (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 text-sm">Loading...</p>
          </div>
        </div>
      ) : user ? (
        <Dashboard />
      ) : showAuth ? (
        <Auth 
          initialMode={authMode}
          onBack={() => setShowAuth(false)}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      ) : (
        <LandingPage 
          onGetStarted={() => {
            setAuthMode('signup');
            setShowAuth(true);
          }}
          onSignIn={() => {
            setAuthMode('signin');
            setShowAuth(true);
          }}
        />
      )}
    </>
  );
}

export default App;
