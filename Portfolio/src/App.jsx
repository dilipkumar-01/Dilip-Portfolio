import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  User,
  GraduationCap,
  FileText,
  ChevronRight,
  Star,
  Award,
  BookOpen,
  Zap,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import ContactForm from './components/ContactForm';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const skills = [
    { name: 'JavaScript', level: 85, icon: Code, color: 'bg-yellow-500' },
    { name: 'React', level: 80, icon: Code, color: 'bg-blue-500' },
    { name: 'HTML/CSS', level: 90, icon: Globe, color: 'bg-orange-500' },
    { name: 'Node.js', level: 70, icon: Server, color: 'bg-green-500' },
    { name: 'Python', level: 80, icon: Code, color: 'bg-blue-600' },
    { name: 'SQL', level: 75, icon: Database, color: 'bg-indigo-500' },
    { name: 'Git', level: 80, icon: Code, color: 'bg-red-500' },
    { name: 'UI/UX Design', level: 70, icon: Palette, color: 'bg-purple-500' }
  ];

  const projects = [
    {
      title: 'Healthcare Dashboard',
      description: 'A Healthcare Dashboard is a visual interface that displays key health-related data and metrics in real time. It helps doctors, administrators, and patients track vital signs, appointments, lab results, and patient records in one place. Designed for clarity and efficiency, it improves decision-making, monitoring, and overall healthcare management.',
      technologies: ['React', 'HTML/CSS', 'Node.js', 'SQL', 'JavaScript', 'Auth0 '],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      liveUrl: 'https://fitpeo-healthcaredashboard.netlify.app/',
      githubUrl: 'https://github.com/dilipkumar-01/fitpeo-healthcaredashboard',
      highlights: ['Real-time Collaboration', 'User Authentication', 'Responsive Design', 'REST API Integration']
    },
    {
      title: 'E-Commerce Website',
      description: 'Modern e-commerce website with advanced product filtering, shopping cart functionality, and payment integration. Features a clean, intuitive interface optimized for conversions and user engagement.',
      technologies: ['React', 'JavaScript', 'SQL', 'HTML/CSS', 'PHP', 'Auth0', 'Database'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      liveUrl: 'https://ecommerce-website-0023.000webhostapp.com/shared/login.html',
      githubUrl: 'https://github.com/dilipkumar-01/Ecommerce-website',
      highlights: ['Payment Integration', 'Product Management', 'Advanced Filtering', 'Mobile Optimized']
    },
    {
      title: 'Nayepankh Foundation Web-Deveopment Internship ',
      description: 'The Nayepankh Foundation offers a Web Development Internship focused on empowering aspiring developers through real-time, socially impactful projects. Interns get hands-on experience with front-end and back-end technologies, contributing to the foundation\'s digital presence. This internship is ideal for students passionate about using tech for social good while enhancing their skills in HTML, CSS, JavaScript, and frameworks like React or Bootstrap. Interns may also collaborate on website updates, UI/UX improvements, and content management.',
      technologies: ['React', 'Chart.js', 'HTML/CSS', 'REST APIs', 'JavaScript', 'Advanced Filtering', 'Mobile Optimized'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      liveUrl: 'https://endearing-piroshki-c97db1.netlify.app/',
      githubUrl: 'https://github.com/dilipkumar-01/NayePankh-Foundation',
      highlights: ['Data Visualization', 'API Integration', 'Interactive Charts', 'Payment Integration']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'TKR College of Engineering and Technology',
      year: '2020-2023',
      grade: 'CGPA: 7.5/10',
      highlights: ['Data Structures & Algorithms', 'Web Development', 'Database Management', 'Software Engineering']
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Annamacharya Institute of Technology and Sciences',
      year: '2017-2020',
      grade: 'Percentage: 73%',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
    }
  ];

  const navigationItems = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Mobile Menu Backdrop Blur */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95 border-b border-gray-800' : 'bg-white/95'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold transition-colors duration-300 cursor-pointer ${isDarkMode ? 'text-blue-400' : 'text-blue-700'
              }`}>
              Dilip.dev
            </div>

            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`navbu text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg transform hover:scale-105 cursor-pointer b2b ${activeSection === item.toLowerCase()
                      ? isDarkMode
                        ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                        : 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer b2b ${isDarkMode
                  ? 'bg-gray-800 text-yellow-400 hover:text-yellow-300'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-800'
                  }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer ${isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                  }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen
              ? 'max-h-96 opacity-100 pb-4'
              : 'max-h-0 opacity-0'
              }`}
            style={{
              height: isMobileMenuOpen ? 'auto' : '0',
              visibility: isMobileMenuOpen ? 'visible' : 'hidden'
            }}
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 cursor-pointer ${activeSection === item.toLowerCase()
                    ? isDarkMode
                      ? 'text-blue-400 bg-gray-800 border-l-4 border-blue-400'
                      : 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-20 pb-16 min-h-screen flex items-center transition-colors duration-300 ${isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-emerald-50'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <div className="mb-8">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  Hi, I'm <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>Navagana Dilip Kumar</span>
                </h1>
                <p className={`text-xl sm:text-2xl mb-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  Full Stack Developer & Problem Solver
                </p>
                <p className={`text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                  Passionate fresher with a strong foundation in modern web technologies. Ready to contribute to innovative projects and grow with a dynamic team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 cursor-pointer ${isDarkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                  View My Work
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Dilip Kumar Resume.pdf';
                    link.download = 'Dilip Kumar Resume.pdf';
                    link.click();
                  }}
                  className={`border-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 cursor-pointer ${isDarkMode
                    ? 'border-blue-400-1 text-blue-400 hover:bg-blue-400 hover:text-gray-900'
                    : 'border-blue-600-1 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className={`w-80 h-80 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isDarkMode
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                  : 'bg-gradient-to-br from-blue-400 to-emerald-400'
                  }`}>
                  <User className="w-40 h-40 text-white" />
                </div>
                <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-bounce ${isDarkMode ? 'bg-yellow-500' : 'bg-amber-400'
                  }`}>
                  <Code className="w-10 h-10 text-white" />
                </div>
                <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-pulse ${isDarkMode ? 'bg-pink-500' : 'bg-purple-400'
                  }`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>About Me</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              A passionate and dedicated computer science graduate eager to begin my journey in the tech industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>My Journey</h3>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                As a recent computer science graduate, I'm passionate about creating innovative solutions through code.
                My academic journey has equipped me with strong fundamentals in programming, problem-solving, and software development.
              </p>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                I believe in continuous learning and staying updated with the latest technologies. My goal is to contribute
                to meaningful projects while growing as a developer in a collaborative environment.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}>Problem Solver</span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'bg-emerald-900 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
                  }`}>Team Player</span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'bg-amber-900 text-amber-300' : 'bg-amber-100 text-amber-800'
                  }`}>Quick Learner</span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'
                  }`}>Detail-Oriented</span>
              </div>
            </div>
            <div className={`p-8 rounded-xl transition-colors duration-300 ${isDarkMode
              ? 'bg-gradient-to-br from-gray-700 to-gray-600'
              : 'bg-gradient-to-br from-blue-50 to-emerald-50'
              }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>What Drives Me</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-600'
                    }`}>
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Innovation</h4>
                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Creating solutions that make a difference</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${isDarkMode ? 'bg-emerald-600' : 'bg-emerald-600'
                    }`}>
                    <BookOpen className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Learning</h4>
                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Constantly expanding my knowledge and skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${isDarkMode ? 'bg-amber-600' : 'bg-amber-600'
                    }`}>
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Excellence</h4>
                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Delivering high-quality work with attention to detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Technical Skills</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              A comprehensive toolkit of modern technologies and programming languages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
                  }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${skill.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{skill.name}</span>
                    </div>
                    <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'
                      }`}>{skill.level}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Education</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Strong academic foundation in computer science and technology
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${isDarkMode
                ? 'bg-gradient-to-r from-gray-700 to-gray-600'
                : 'bg-gradient-to-r from-blue-50 to-emerald-50'
                }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-600'
                      }`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{edu.degree}</h3>
                      <p className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>{edu.year}</p>
                    <p className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>{edu.grade}</p>
                  </div>
                </div>
                <div className="ml-16">
                  <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((subject, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-white text-gray-700'
                        }`}>
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Featured Projects</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              A showcase of my development skills through practical projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 transform hover:scale-110 cursor-pointer"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 transform hover:scale-110 cursor-pointer"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{project.description}</p>

                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                          }`}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 text-sm rounded-lg font-medium transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                          }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 text-center no-underline transform hover:scale-105 hover:shadow-lg cursor-pointer ${isDarkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/25'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      style={{ textDecoration: 'none' }}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className={`flex-1 border-2 py-2 px-4 rounded-lg font-medium transition-all duration-200 text-center no-underline transform hover:scale-105 hover:shadow-md cursor-pointer ${isDarkMode
                        ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      style={{ textDecoration: 'none' }}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Get In Touch</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Ready to start my career journey. Let's connect and discuss opportunities!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Let's Connect</h3>
              <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                I'm actively seeking opportunities to begin my career in software development.
                Whether you have an opening or just want to connect, I'd love to hear from you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                    }`}>
                    <Mail className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Email</p>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>dilipnava2@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-emerald-900' : 'bg-emerald-100'
                    }`}>
                    <Phone className={`w-6 h-6 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  </div>
                  <div>
                    <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Phone</p>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>+91 9494860689</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-amber-900' : 'bg-amber-100'
                    }`}>
                    <MapPin className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                  </div>
                  <div>
                    <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Location</p>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="https://github.com/dilipkumar-01?tab=repositories" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-900 hover:bg-gray-800'
                  }`}>
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/navagana-dilip-kumar/" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
                  }`}>
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dilipnava2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-600 hover:bg-gray-700'
                    }`}
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <ContactForm isDarkMode={isDarkMode} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              &copy; Copyright 2024. All Rights Reserved - Navagana Dilip Kumar.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
