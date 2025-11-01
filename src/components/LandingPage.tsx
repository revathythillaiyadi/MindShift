import { useState } from 'react';
import { Brain, Heart, Users, BookOpen, AlertCircle, Phone, Mail, Shield, TrendingUp, MessageCircle, Calendar, Award, ChevronRight, Menu, X } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img
                src="/Gemini_Generated_Image_majm7smajm7smajm.png"
                alt="Mindshift Logo"
                className="w-16 h-16 object-contain drop-shadow-md"
              />
              <span className="text-2xl font-semibold text-gray-800">Mindshift</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('resources')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Resources
              </button>
              <button onClick={() => scrollToSection('experts')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Experts
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('sos')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
                SOS
              </button>
              <button onClick={onGetStarted} className="px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                Get Started
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                About Us
              </button>
              <button onClick={() => scrollToSection('resources')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                Resources
              </button>
              <button onClick={() => scrollToSection('experts')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                Experts
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                Services
              </button>
              <button onClick={() => scrollToSection('sos')} className="block w-full text-left px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium">
                SOS
              </button>
              <button onClick={onGetStarted} className="block w-full px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Journey to{' '}
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Mindful Growth
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your thoughts, track your progress, and achieve mental wellness with our AI-powered companion. Available 24/7 to support your mental health journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Start Your Journey <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white text-gray-700 rounded-xl font-medium hover:shadow-lg transition-all border border-gray-200"
                >
                  Explore Features
                </button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Available Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">10k+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-blue-400 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/Gemini_Generated_Image_majm7smajm7smajm.png"
                    alt="Mindshift Logo"
                    className="w-16 h-16 object-contain drop-shadow-lg"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">MindShift AI</div>
                    <div className="text-sm text-purple-600 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Available now
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-sm text-gray-600 mb-2">How are you feeling today?</div>
                    <div className="text-gray-800">I'm feeling a bit anxious about tomorrow...</div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl p-4 text-white">
                    <div className="text-sm opacity-90 mb-2">MindShift AI</div>
                    <div>I hear you. Anxiety about the future is common. Let's work through this together. Can you tell me what specifically is worrying you?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make mental health support accessible, effective, and stigma-free for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals with innovative tools and compassionate support for their mental wellness journey, making therapy accessible anytime, anywhere.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Privacy-first, evidence-based, and user-centered. We combine clinical expertise with cutting-edge AI to deliver personalized mental health support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where mental health support is as accessible as physical healthcare, and seeking help is celebrated rather than stigmatized.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Why Choose MindShift?</h3>
              <p className="text-lg opacity-90 mb-8">
                We combine the latest in AI technology with proven therapeutic techniques, offering you a personalized mental health companion that understands your unique needs and grows with you.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-90">Confidential</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Availability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">AI</div>
                  <div className="text-sm opacity-90">Powered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">Free</div>
                  <div className="text-sm opacity-90">To Start</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our curated collection of mental health resources, guides, and self-care tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Care Guides</h3>
              <p className="text-gray-600 mb-4">
                Practical guides on mindfulness, stress management, and building healthy habits for lasting wellness.
              </p>
              <button className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Explore Guides <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meditation & Relaxation</h3>
              <p className="text-gray-600 mb-4">
                Guided meditations, breathing exercises, and relaxation techniques to calm your mind and reduce anxiety.
              </p>
              <button className="text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Start Meditating <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cognitive Reframing</h3>
              <p className="text-gray-600 mb-4">
                Learn techniques to challenge negative thoughts and develop healthier thinking patterns using CBT principles.
              </p>
              <button className="text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mental Health Blog</h3>
              <p className="text-gray-600 mb-4">
                Expert articles on anxiety, depression, relationships, and personal growth from licensed therapists.
              </p>
              <button className="text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Read Articles <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Worksheets & Tools</h3>
              <p className="text-gray-600 mb-4">
                Downloadable worksheets for mood tracking, goal setting, and therapeutic exercises you can practice daily.
              </p>
              <button className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Download Tools <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600 mb-4">
                Connect with others on similar journeys, share experiences, and find support in our moderated community.
              </p>
              <button className="text-pink-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Join Community <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="experts" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI is trained on evidence-based therapeutic techniques developed and validated by licensed mental health professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                DS
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Chen, PhD</h3>
              <div className="text-sm text-purple-600 font-medium mb-3">Clinical Psychologist</div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Specializes in Cognitive Behavioral Therapy and anxiety disorders. 15+ years of clinical experience helping individuals reframe negative thought patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">CBT</span>
                <span className="px-3 py-1 bg-purple-100 text-teal-700 rounded-full text-xs font-medium">Anxiety</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Depression</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                MR
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Marcus Rodriguez, PsyD</h3>
              <div className="text-sm text-purple-600 font-medium mb-3">Licensed Therapist</div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Expert in mindfulness-based therapies and stress reduction. Passionate about making mental health tools accessible to everyone through technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-teal-700 rounded-full text-xs font-medium">Mindfulness</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Stress</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">MBSR</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                AJ
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Aisha Johnson, LMFT</h3>
              <div className="text-sm text-blue-600 font-medium mb-3">Marriage & Family Therapist</div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Focuses on relationship dynamics, communication skills, and emotional regulation. Brings a holistic approach to mental wellness and personal growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Relationships</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Communication</span>
                <span className="px-3 py-1 bg-purple-100 text-teal-700 rounded-full text-xs font-medium">EFT</span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence-Based Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI is trained on proven therapeutic techniques including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Mindfulness-Based Stress Reduction (MBSR). Every interaction is designed to support your mental wellness using methods validated by decades of clinical research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health tools designed to support your unique journey toward wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI-Powered Chat Therapy</h3>
                  <div className="text-sm text-purple-600 font-medium mb-3">Available 24/7</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Engage in meaningful conversations with our AI companion trained on evidence-based therapeutic techniques. Get support for anxiety, depression, stress, and daily challenges whenever you need it.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  Cognitive reframing using CBT principles
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  Personalized coping strategies
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  Immediate emotional support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mood Tracking</h3>
                  <div className="text-sm text-purple-600 font-medium mb-3">Daily Check-ins</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Monitor your emotional patterns over time with our intuitive mood tracking system. Identify triggers, celebrate progress, and gain insights into your mental health journey.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Visual mood charts and trends
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Pattern recognition and insights
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Progress celebration
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Guided Journaling</h3>
                  <div className="text-sm text-blue-600 font-medium mb-3">Therapeutic Writing</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Express yourself freely with AI-guided journaling prompts. Process emotions, track personal growth, and develop self-awareness through structured reflection.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Daily journal prompts
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Emotional processing support
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Private and secure
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Progress & Goals</h3>
                  <div className="text-sm text-purple-600 font-medium mb-3">Track Your Growth</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Set meaningful goals, track daily streaks, and earn achievements as you build lasting mental health habits. Celebrate every step forward on your journey.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Goal setting and tracking
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Streak maintenance
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Achievement badges
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onGetStarted}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 text-lg"
            >
              Try All Features Free <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="sos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-4">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Crisis Support</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If you're in crisis or need immediate support, help is available right now.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">National Suicide Prevention Lifeline</h3>
                    <div className="text-sm text-gray-600">24/7 Crisis Support</div>
                  </div>
                </div>
                <a
                  href="tel:988"
                  className="block w-full py-4 px-6 bg-red-500 text-white text-center rounded-xl font-bold text-xl hover:bg-red-600 transition-colors"
                >
                  Call 988
                </a>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  Free, confidential support 24/7
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Crisis Text Line</h3>
                    <div className="text-sm text-gray-600">Text-based Support</div>
                  </div>
                </div>
                <a
                  href="sms:741741"
                  className="block w-full py-4 px-6 bg-blue-500 text-white text-center rounded-xl font-bold text-xl hover:bg-blue-600 transition-colors"
                >
                  Text "HELLO" to 741741
                </a>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  Connect with a crisis counselor via text
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">If you're in immediate danger:</h3>
                  <p className="text-gray-600 mb-4">
                    Please call emergency services (911 in the US) or go to your nearest emergency room. Your safety is the top priority.
                  </p>
                  <a
                    href="tel:911"
                    className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Call 911
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">SAMHSA Helpline</h4>
                <a href="tel:1-800-662-4357" className="text-purple-600 font-medium hover:underline">
                  1-800-662-HELP
                </a>
                <p className="text-sm text-gray-600 mt-1">Treatment referral services</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Veterans Crisis Line</h4>
                <a href="tel:988" className="text-purple-600 font-medium hover:underline">
                  Press 1 after calling 988
                </a>
                <p className="text-sm text-gray-600 mt-1">Support for veterans and families</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Trevor Project</h4>
                <a href="tel:1-866-488-7386" className="text-purple-600 font-medium hover:underline">
                  1-866-488-7386
                </a>
                <p className="text-sm text-gray-600 mt-1">LGBTQ youth support</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              You don't have to face this alone. Trained counselors are ready to listen and help, no matter what you're going through.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of people who have taken the first step toward better mental health.
          </p>
          <button
            onClick={onGetStarted}
            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 text-lg"
          >
            Get Started Free <ChevronRight className="w-5 h-5" />
          </button>
          <p className="text-sm mt-4 opacity-75">No credit card required. Start in seconds.</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/Gemini_Generated_Image_majm7smajm7smajm.png"
                  alt="Mindshift Logo"
                  className="w-14 h-14 object-contain drop-shadow-lg"
                />
                <span className="text-xl font-semibold text-white">Mindshift</span>
              </div>
              <p className="text-sm text-gray-400">
                Making mental health support accessible to everyone, everywhere.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('resources')} className="hover:text-white transition-colors">Self-Care Guides</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><button onClick={() => scrollToSection('sos')} className="hover:text-white transition-colors">Crisis Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2025 Mindshift. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
