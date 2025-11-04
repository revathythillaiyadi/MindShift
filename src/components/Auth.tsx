import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react';

interface AuthProps {
  initialMode?: 'signin' | 'signup';
  onBack?: () => void;
  onSwitchMode?: (mode: 'signin' | 'signup') => void;
}

export function Auth({ initialMode = 'signin', onBack, onSwitchMode }: AuthProps) {
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [emergencyContactRelationship, setEmergencyContactRelationship] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const { signIn, signUp, resetPassword } = useAuth();

  useEffect(() => {
    setIsSignUp(initialMode === 'signup');
  }, [initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password, displayName, username, phoneNumber, emergencyContactNumber, emergencyContactRelationship);
        setVerificationSent(true);
      } else {
        await signIn(email, password);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Please enter your email address first');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send password reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400 opacity-15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-full max-w-md relative">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute -top-12 left-0 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-4 z-10"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
        )}
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <img
              src="/mindshift-logo.svg"
              alt="Mindshift Logo"
              className="h-32 w-auto object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {isSignUp ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-600 text-sm">
            {isSignUp ? 'Join Mindshift and start your journey' : 'Sign in to continue to Mindshift'}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100 max-h-[90vh] overflow-y-auto">
          {verificationSent ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Check Your Email</h2>
              <p className="text-gray-600 leading-relaxed">
                We've sent a verification link to <strong>{email}</strong>. Please check your inbox and click the link to verify your account.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800 text-left">
                    <p className="font-medium mb-1">Next Steps:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-700">
                      <li>Check your email inbox (and spam folder)</li>
                      <li>Click the verification link</li>
                      <li>Return here to sign in</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setVerificationSent(false);
                  setIsSignUp(false);
                  setEmail('');
                  setPassword('');
                  setDisplayName('');
                  setUsername('');
                  setPhoneNumber('');
                  setEmergencyContactNumber('');
                  setEmergencyContactRelationship('');
                }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all active:scale-95"
              >
                Back to Sign In
              </button>
            </div>
          ) : resetSent ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Password Reset Sent</h2>
              <p className="text-gray-600 leading-relaxed">
                We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the instructions.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800 text-left">
                    <p className="font-medium mb-1">Next Steps:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-700">
                      <li>Check your email inbox (and spam folder)</li>
                      <li>Click the password reset link</li>
                      <li>Create a new password</li>
                      <li>Return here to sign in</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setResetSent(false);
                  setIsSignUp(false);
                  setEmail('');
                  setPassword('');
                  setDisplayName('');
                  setUsername('');
                  setPhoneNumber('');
                  setEmergencyContactNumber('');
                  setEmergencyContactRelationship('');
                }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all active:scale-95"
              >
                Back to Sign In
              </button>
            </div>
          ) : (
            <>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all active:scale-[0.98]"
                    placeholder="Choose a username"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                    Display Name
                  </label>
                  <input
                    id="displayName"
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all active:scale-[0.98]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all active:scale-[0.98]"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Emergency Contact Information</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="emergencyContactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="emergencyContactNumber"
                      type="tel"
                      value={emergencyContactNumber}
                      onChange={(e) => setEmergencyContactNumber(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all active:scale-[0.98]"
                      placeholder="+1 (555) 987-6543"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="emergencyContactRelationship" className="block text-sm font-medium text-gray-700 mb-2">
                      Relationship to Emergency Contact <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="emergencyContactRelationship"
                      value={emergencyContactRelationship}
                      onChange={(e) => setEmergencyContactRelationship(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all active:scale-[0.98]"
                      required
                    >
                      <option value="">Select relationship</option>
                      <option value="parent">Parent</option>
                      <option value="spouse">Spouse/Partner</option>
                      <option value="sibling">Sibling</option>
                      <option value="child">Child</option>
                      <option value="friend">Friend</option>
                      <option value="relative">Relative</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all active:scale-[0.98]"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all active:scale-[0.98]"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-medium py-3 px-4 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 space-y-3 text-center">
            {!isSignUp && (
              <button
                onClick={handlePasswordReset}
                disabled={loading || !email}
                className="text-sm text-blue-600 hover:text-blue-500 transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Forgot your password?
              </button>
            )}
            
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-gray-200">
              <span className="text-sm text-gray-600">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </span>
              <button
                type="button"
                onClick={() => {
                  const newMode = !isSignUp;
                  setIsSignUp(newMode);
                  setError('');
                  onSwitchMode?.(newMode ? 'signup' : 'signin');
                  // Clear form when switching
                  if (!newMode) {
                    setUsername('');
                    setPhoneNumber('');
                    setEmergencyContactNumber('');
                    setEmergencyContactRelationship('');
                  }
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors active:scale-95"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </div>
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
