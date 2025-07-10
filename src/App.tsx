import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  BarChart3, 
  Cpu, 
  Database, 
  FileText, 
  GitBranch, 
  Zap, 
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  Code,
  X
} from 'lucide-react';

function App() {
  const [currentTech, setCurrentTech] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'R'
  ];

  const interests = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building intelligent systems that can learn from data and make predictions",
      color: "#8b5cf6"
    },
    {
      icon: FileText,
      title: "Natural Language Processing",
      description: "Teaching machines to understand and generate human language",
      color: "#06b6d4"
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Extracting insights and patterns from complex datasets",
      color: "#10b981"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient">
      {/* Hero Section */}
      <div className="section flex-center" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="text-center">
            <div className="mb-4">
              <div className="warning-badge mb-4">
                <Code size={16} />
                <span>Web Development Warning</span>
              </div>
              
              <h1 className="hero-title">
                I Don't Do
                <br />
                <span className="text-accent">Web Development</span>
              </h1>
              
              <p className="hero-subtitle">
                You've stumbled upon a landing page created by someone who{' '}
                <button 
                  onClick={() => setShowDisclaimer(true)}
                  style={{ 
                    color: '#ff6b6b', 
                    textDecoration: 'underline', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: 'inherit'
                  }}
                >
                  reluctantly built this
                </button>
                {' '}to showcase their <em>actual</em> interests.
              </p>
            </div>

            <div className="mb-5">
              <p className="text-light mb-2">My real passion lies in:</p>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Data Science • NLP • Machine Learning
              </div>
            </div>

            <div className="mb-6">
              <div className="tech-badge" style={{ display: 'inline-block' }}>
                <div className="text-light" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  Currently working with:
                </div>
                <div className="text-white" style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'monospace' }}>
                  {techStack[currentTech]}
                </div>
              </div>
            </div>

            <div className="bounce">
              <ChevronDown size={32} color="rgba(255, 255, 255, 0.7)" />
            </div>
          </div>
        </div>
      </div>

      {/* Interests Section */}
      <div className="section">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">What I Actually Love</h2>
            <p className="text-light" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
              While others debate frameworks and CSS preprocessors, I'm busy training models 
              and finding patterns in data that actually matter.
            </p>
          </div>

          <div className="grid grid-3">
            {interests.map((interest, index) => (
              <div key={index} className="card">
                <div className="card-icon" style={{ background: `linear-gradient(135deg, ${interest.color}, ${interest.color}dd)` }}>
                  <interest.icon size={28} color="white" />
                </div>
                
                <h3 className="card-title">{interest.title}</h3>
                <p className="text-light">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container">
          <div className="grid grid-4 text-center">
            <div>
              <div className="stats-number" style={{ color: '#06b6d4' }}>500+</div>
              <div className="stats-label">Models Trained</div>
            </div>
            <div>
              <div className="stats-number" style={{ color: '#10b981' }}>10TB+</div>
              <div className="stats-label">Data Processed</div>
            </div>
            <div>
              <div className="stats-number" style={{ color: '#8b5cf6' }}>50+</div>
              <div className="stats-label">NLP Projects</div>
            </div>
            <div>
              <div className="stats-number" style={{ color: '#f59e0b' }}>0</div>
              <div className="stats-label">CSS Frameworks Enjoyed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="section-title">Let's Talk Data, Not Divs</h2>
            <p className="text-light mb-5" style={{ fontSize: '1.25rem' }}>
              If you have interesting datasets, ML problems, or NLP challenges, 
              I'd love to hear from you. Just don't ask me to center a div.
            </p>
            
            <div className="flex flex-center flex-wrap" style={{ gap: '1rem' }}>
              <a href="mailto:hello@example.com" className="btn btn-primary">
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a href="https://linkedin.com" className="btn btn-secondary">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" className="btn btn-secondary">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container text-center">
          <p>
            © 2025 • Built reluctantly with React & CSS • 
            <span className="text-accent"> Maintained grudgingly by Parva Patel</span>
          </p>
        </div>
      </div>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="modal-overlay" onClick={() => setShowDisclaimer(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: '600' }}>Disclaimer</h3>
              <button 
                onClick={() => setShowDisclaimer(false)}
                className="close-btn"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-light mb-4">
              Yes, I ironically built this website to tell you I don't like web development. 
              The irony is not lost on me. I promise I'm much more enthusiastic about 
              training neural networks than I am about browser compatibility.
            </p>
            <button 
              onClick={() => setShowDisclaimer(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
