import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Shield, 
  Sparkles, 
  Sun, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  FileText, 
  Calculator, 
  HelpCircle, 
  Users, 
  Award, 
  Clock, 
  ChevronRight,
  Sliders,
  Check,
  Zap,
  Briefcase
} from 'lucide-react';

// Animated Count-Up Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '+' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

type LightTheme = 'corporate-white' | 'emerald-executive' | 'modern-navy';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'quote' | 'about' | 'contact'>('home');
  const [selectedTheme, setSelectedTheme] = useState<LightTheme>('corporate-white');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Quote Estimator State
  const [quoteService, setQuoteService] = useState('mep');
  const [propertySize, setPropertySize] = useState('medium');
  const [serviceTier, setServiceTier] = useState('comprehensive');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeRegionPin, setActiveRegionPin] = useState<'riyadh' | 'jeddah' | 'dammam'>('riyadh');

  // Theme styling definitions
  const themes = {
    'corporate-white': {
      name: 'Clean Corporate White',
      bg: 'bg-slate-50',
      cardBg: 'bg-white',
      textMain: 'text-slate-900',
      textMuted: 'text-slate-600',
      primaryBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      primaryText: 'text-emerald-600',
      accentBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      headerBg: 'bg-white/90 backdrop-blur-md border-b border-slate-200',
      footerBg: 'bg-slate-900 text-slate-100',
      heroGrad: 'from-slate-900 via-emerald-950 to-slate-900',
      badgeBg: 'bg-emerald-100 text-emerald-800'
    },
    'emerald-executive': {
      name: 'Emerald Executive',
      bg: 'bg-emerald-50/40',
      cardBg: 'bg-white shadow-emerald-100/50',
      textMain: 'text-emerald-950',
      textMuted: 'text-emerald-800/75',
      primaryBg: 'bg-emerald-700 hover:bg-emerald-800 text-white',
      primaryText: 'text-emerald-700',
      accentBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      headerBg: 'bg-emerald-900/95 backdrop-blur-md text-white border-b border-emerald-800',
      footerBg: 'bg-emerald-950 text-emerald-100',
      heroGrad: 'from-emerald-950 via-emerald-900 to-teal-950',
      badgeBg: 'bg-emerald-200 text-emerald-950'
    },
    'modern-navy': {
      name: 'Modern Navy & Slate',
      bg: 'bg-gray-100',
      cardBg: 'bg-white shadow-md',
      textMain: 'text-gray-900',
      textMuted: 'text-gray-600',
      primaryBg: 'bg-blue-600 hover:bg-blue-700 text-white',
      primaryText: 'text-blue-600',
      accentBg: 'bg-blue-50 text-blue-800 border-blue-200',
      headerBg: 'bg-slate-900 text-white border-b border-slate-800',
      footerBg: 'bg-slate-950 text-slate-200',
      heroGrad: 'from-blue-950 via-slate-900 to-indigo-950',
      badgeBg: 'bg-blue-100 text-blue-900'
    }
  };

  const currentTheme = themes[selectedTheme];

  const services = [
    {
      id: 'mep',
      title: 'MEP Contracting & Engineering',
      category: 'Engineering',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      description: 'End-to-end Mechanical, Electrical, and Plumbing design, installation, testing, and preventative maintenance for high-rise towers, industrial plants, and commercial facilities.',
      highlights: ['HVAC Ductwork & Chillers', 'High-Voltage Electrical Panels', 'Advanced Plumbing & Drainage', 'BMS Automation Integration']
    },
    {
      id: 'hvac',
      title: 'HVAC System Solutions',
      category: 'Climate Control',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
      description: 'Specialized commercial AC upkeep, central chiller overhauls, VRF systems, indoor air quality testing, and energy optimization for extreme climates.',
      highlights: ['Chiller Overhaul & Maintenance', 'Air Duct Deep Sanitization', 'Energy Efficiency Audits', '24/7 Emergency Dispatch']
    },
    {
      id: 'pest',
      title: 'Commercial Pest Control & Sanitation',
      category: 'Sanitation',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=800',
      description: 'HACCP-compliant integrated pest management (IPM), fumigation, rodent control, and hospital-grade sanitization protocols for food processing, hospitality, and corporate offices.',
      highlights: ['HACCP & ISO Compliant Protocols', 'Eco-Friendly Botanical Formulations', 'Termite Barrier Treatments', 'Bio-Sanitization & Fogging']
    },
    {
      id: 'cleaning',
      title: 'Industrial Cleaning & Facade Maintenance',
      category: 'Maintenance',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800',
      description: 'Professional high-pressure industrial washing, cleanroom sanitation, post-construction cleanup, and rope-access exterior glass facade maintenance.',
      highlights: ['Rope-Access Glass & Cladding', 'Cleanroom & Sterile Area Care', 'Heavy Machinery Degreasing', 'Floor Restoration & Polishing']
    },
    {
      id: 'safety',
      title: 'Safety Equipment & PPE Supply',
      category: 'Safety',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
      description: 'Wholesale supply and certification of OSHA-compliant personal protective equipment (PPE), fire suppression systems, emergency eyewash stations, and industrial safety gear.',
      highlights: ['Certified OSHA PPE & Gear', 'Fire Alarm & Suppression Systems', 'Spill Containment Kits', 'Safety Training & Compliance']
    },
    {
      id: 'solar',
      title: 'Solar Energy & Renewable Solutions',
      category: 'Renewables',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1509391365360-80026e6f5be8?auto=format&fit=crop&q=80&w=800',
      description: 'Commercial photovoltaic (PV) solar panel installation, microgrid engineering, solar farm cleaning robotics, and carbon footprint reduction advisory.',
      highlights: ['Commercial Rooftop PV Arrays', 'Automated Solar Panel Cleaning', 'Battery Energy Storage Systems', 'ROI & Carbon Auditing']
    }
  ];

  const filteredServices = services.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || s.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.textMain} transition-colors duration-300 font-sans`}>
      
      {/* Top Utility & Light Theme Switcher Bar */}
      <header className={`${currentTheme.headerBg} sticky top-0 z-50 shadow-sm transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              BC
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block leading-tight">Best Care Company</span>
              <span className="text-xs opacity-75 uppercase tracking-wider font-medium">BCCL Saudi Arabia</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'home' ? 'bg-emerald-600 text-white' : 'hover:opacity-100 opacity-80'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'services' ? 'bg-emerald-600 text-white' : 'hover:opacity-100 opacity-80'}`}
            >
              Services Directory
            </button>
            <button 
              onClick={() => setActiveTab('quote')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'quote' ? 'bg-emerald-600 text-white' : 'hover:opacity-100 opacity-80'}`}
            >
              Instant RFQ Estimator
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'about' ? 'bg-emerald-600 text-white' : 'hover:opacity-100 opacity-80'}`}
            >
              About BCCL
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'contact' ? 'bg-emerald-600 text-white' : 'hover:opacity-100 opacity-80'}`}
            >
              Contact Us
            </button>
          </nav>

          {/* Theme Selector & Quick Phone */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-current/20 text-xs font-semibold hover:bg-current/10 transition-colors">
                <Sliders className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Theme: {currentTheme.name}</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-slate-200 py-2 hidden group-hover:block z-50 text-slate-900">
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Select Light Theme</div>
                <button 
                  onClick={() => setSelectedTheme('corporate-white')}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 ${selectedTheme === 'corporate-white' ? 'font-bold text-emerald-600 bg-emerald-50/50' : ''}`}
                >
                  <span>Clean Corporate White</span>
                  {selectedTheme === 'corporate-white' && <Check className="w-4 h-4 text-emerald-600" />}
                </button>
                <button 
                  onClick={() => setSelectedTheme('emerald-executive')}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 ${selectedTheme === 'emerald-executive' ? 'font-bold text-emerald-700 bg-emerald-50/50' : ''}`}
                >
                  <span>Emerald Executive</span>
                  {selectedTheme === 'emerald-executive' && <Check className="w-4 h-4 text-emerald-700" />}
                </button>
                <button 
                  onClick={() => setSelectedTheme('modern-navy')}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 ${selectedTheme === 'modern-navy' ? 'font-bold text-blue-600 bg-blue-50/50' : ''}`}
                >
                  <span>Modern Navy & Slate</span>
                  {selectedTheme === 'modern-navy' && <Check className="w-4 h-4 text-blue-600" />}
                </button>
              </div>
            </div>

            <a 
              href="tel:+966114000000" 
              className="hidden lg:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>+966 11 400 0000</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden flex overflow-x-auto bg-white border-b border-slate-200 px-4 py-2 space-x-2 scrollbar-none">
        <button onClick={() => setActiveTab('home')} className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium ${activeTab === 'home' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Home</button>
        <button onClick={() => setActiveTab('services')} className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium ${activeTab === 'services' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Services</button>
        <button onClick={() => setActiveTab('quote')} className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium ${activeTab === 'quote' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>RFQ Estimator</button>
        <button onClick={() => setActiveTab('about')} className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium ${activeTab === 'about' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>About</button>
        <button onClick={() => setActiveTab('contact')} className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium ${activeTab === 'contact' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Contact</button>
      </div>

      {/* Main Content Area */}
      <main>
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <div className={`relative bg-gradient-to-br ${currentTheme.heroGrad} text-white py-20 lg:py-28 overflow-hidden`}>
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Kingdom of Saudi Arabia Premier Services</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                      Excellence in <span className="text-emerald-400">MEP, HVAC</span> & Facility Solutions
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                      Best Care Company Ltd. (BCCL) delivers world-class engineering contracting, precision climate control, eco-friendly sanitation, and integrated facility maintenance for major commercial enterprises across KSA.
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <button 
                        onClick={() => setActiveTab('services')}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Explore Services Catalog</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      
                      <button 
                        onClick={() => setActiveTab('quote')}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl backdrop-blur-md transition-all flex items-center justify-center space-x-2"
                      >
                        <Calculator className="w-5 h-5" />
                        <span>Instant Cost Estimator</span>
                      </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold text-white"><AnimatedCounter end={15} /></div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold text-emerald-400"><AnimatedCounter end={500} /></div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Active Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold text-white"><AnimatedCounter end={1250} /></div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Projects Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold text-emerald-400"><AnimatedCounter end={250} /></div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Expert Technicians</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <img 
                        src="https://images.unsplash.com/photo-1541888946425-d0fbb18f1585?auto=format&fit=crop&q=80&w=1000" 
                        alt="Best Care Company Facility Operations" 
                        className="w-full h-[460px] object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                        <div className="text-white">
                          <span className="text-xs bg-emerald-600 font-bold px-2.5 py-1 rounded-md uppercase">Riyadh Headquarters</span>
                          <p className="text-sm font-medium mt-2">Serving Riyadh, Jeddah, Dammam & Jubail with dedicated engineering squads.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infinite-Loop Partner Clients Logo Carousel */}
            <div className="bg-slate-900 py-10 border-y border-slate-800 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Trusted by Leading Enterprises & Industrial Groups across KSA</span>
              </div>
              
              <div className="relative w-full flex overflow-x-hidden group">
                <div className="flex animate-marquee space-x-12 whitespace-nowrap py-4 items-center">
                  {[
                    "Al-Rajhi Industrial",
                    "Saudi Aramco Partners",
                    "SABIC Facilities",
                    "NEOM Infrastructure",
                    "Riyadh Metro Corp",
                    "Jeddah Tower Management",
                    "Dammam Port Authority",
                    "Al-marai Industrial",
                    "STC Smart Towers",
                    "Marafiq Power & Water"
                  ].map((client, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-slate-800/80 border border-slate-700/80 px-6 py-3 rounded-xl shadow-md shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">
                        {client.charAt(0)}
                      </div>
                      <span className="font-bold text-sm text-slate-200 tracking-wide">{client}</span>
                    </div>
                  ))}
                  {/* Duplicate for seamless infinite loop */}
                  {[
                    "Al-Rajhi Industrial",
                    "Saudi Aramco Partners",
                    "SABIC Facilities",
                    "NEOM Infrastructure",
                    "Riyadh Metro Corp",
                    "Jeddah Tower Management",
                    "Dammam Port Authority",
                    "Al-marai Industrial",
                    "STC Smart Towers",
                    "Marafiq Power & Water"
                  ].map((client, idx) => (
                    <div key={`dup-${idx}`} className="flex items-center space-x-3 bg-slate-800/80 border border-slate-700/80 px-6 py-3 rounded-xl shadow-md shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">
                        {client.charAt(0)}
                      </div>
                      <span className="font-bold text-sm text-slate-200 tracking-wide">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Services Section with Photos */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Comprehensive Capabilities</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Core Corporate Services</h2>
                <p className="text-slate-600 mt-4 text-base sm:text-lg">Engineered for uncompromising quality, safety, and operational uptime in commercial and industrial facilities.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.id} className={`${currentTheme.cardBg} rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col hover:-translate-y-1 transition-all duration-300`}>
                      <div className="relative h-52 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-emerald-600 text-white p-2.5 rounded-xl shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium">
                          {service.category}
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                          <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                          
                          <ul className="space-y-2.5 mb-6">
                            {service.highlights.map((h, i) => (
                              <li key={i} className="flex items-center text-xs font-medium text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button 
                          onClick={() => setActiveTab('services')}
                          className="w-full mt-auto py-3 px-4 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 rounded-xl text-sm font-semibold transition-all flex items-center justify-center space-x-2 group"
                        >
                          <span>View Full Specifications</span>
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Dedicated Pest Control & Sanitation Section with Background Image */}
            <section className="relative py-24 text-white overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=1600" 
                  alt="Commercial Pest Control & Sanitation" 
                  className="w-full h-full object-cover filter brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950/80 to-slate-900/70"></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">HACCP & ISO Certified</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 mb-6 leading-tight">
                      Enterprise-Grade <span className="text-emerald-400">Pest Control & Bio-Sanitization</span>
                    </h2>
                    <p className="text-slate-200 text-base sm:text-lg mb-8 leading-relaxed">
                      Protecting commercial facilities, hospitality chains, and food processing plants across Saudi Arabia with eco-friendly botanical formulations, integrated pest management (IPM), and hospital-grade disinfection protocols.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
                        <h4 className="font-bold text-sm">HACCP & SFDA Compliant</h4>
                        <p className="text-xs text-slate-300 mt-1">Safe for food handling and sterile pharmaceutical environments.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <Shield className="w-5 h-5 text-emerald-400 mb-2" />
                        <h4 className="font-bold text-sm">24/7 Rapid Response</h4>
                        <p className="text-xs text-slate-300 mt-1">Emergency fogging and termite eradication squads.</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => setActiveTab('services')}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center space-x-2"
                    >
                      <span>Book Pest Control Inspection</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl">
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">Pest Control & Sanitation Packages</h3>
                    <ul className="space-y-4 text-sm text-slate-300">
                      <li className="flex items-start space-x-3 pb-3 border-b border-slate-800">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">1</div>
                        <div>
                          <strong className="text-white block">Commercial IPM Audit</strong>
                          <span className="text-xs text-slate-400">Detailed vulnerability mapping for corporate offices & warehouses.</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3 pb-3 border-b border-slate-800">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">2</div>
                        <div>
                          <strong className="text-white block">Eco-Fogging & Bio-Sanitization</strong>
                          <span className="text-xs text-slate-400">Hospital-grade surface disinfection eliminating 99.9% pathogens.</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">3</div>
                        <div>
                          <strong className="text-white block">Preventative Termite Barriers</strong>
                          <span className="text-xs text-slate-400">Pre and post-construction chemical soil treatments with warranty.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>


          </div>
        )}

        {activeTab === 'services' && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Comprehensive Catalog</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-3">Services Directory & Technical Specs</h1>
              <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Browse our complete engineering, maintenance, and facility management offerings designed for enterprise clients.</p>
            </div>

            {/* Search and Category Filter Bar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search services or technical specs..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {['all', 'Engineering', 'Climate Control', 'Sanitation', 'Maintenance', 'Safety', 'Renewables'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-colors ${selectedCategory === cat ? 'bg-emerald-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-emerald-600 text-white p-3 rounded-xl shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md font-medium">
                        {service.category}
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                        
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">Key Technical Scope:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                          {service.highlights.map((h, i) => (
                            <div key={i} className="flex items-center text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-slate-400 block">Service SLA</span>
                          <span className="text-sm font-bold text-slate-800">24/7 Rapid Response Available</span>
                        </div>
                        <button 
                          onClick={() => setActiveTab('quote')}
                          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all flex items-center space-x-2"
                        >
                          <span>Request Quote</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'quote' && (
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Procurement Portal</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-3">Instant RFQ Cost Estimator</h1>
              <p className="text-slate-600 mt-2">Configure your facility requirements for an immediate tailored estimate and consultation request.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-8 sm:p-10">
              {quoteSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">RFQ Proposal Successfully Generated</h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-6">
                    Your preliminary estimate has been registered. Our engineering team in Riyadh has received your specifications and will send a formal commercial proposal within 2 business hours.
                  </p>
                  <button 
                    onClick={() => setQuoteSubmitted(false)}
                    className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl text-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">1. Select Primary Service Division</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'mep', label: 'MEP Contracting' },
                        { id: 'hvac', label: 'HVAC Solutions' },
                        { id: 'pest', label: 'Pest Control & Sanitation' },
                        { id: 'cleaning', label: 'Industrial Cleaning' },
                        { id: 'safety', label: 'Safety & PPE Supply' },
                        { id: 'solar', label: 'Solar Energy PV' }
                      ].map((s) => (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => setQuoteService(s.id)}
                          className={`p-4 rounded-xl text-left border text-sm font-semibold transition-all ${quoteService === s.id ? 'border-emerald-600 bg-emerald-50/50 text-emerald-900 shadow-sm' : 'border-slate-200 hover:border-slate-300 text-slate-700'}`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">2. Facility Scale / Area</label>
                      <select 
                        value={propertySize}
                        onChange={(e) => setPropertySize(e.target.value)}
                        className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="small">Small Commercial Office (&lt; 500 m²)</option>
                        <option value="medium">Medium Commercial Building (500 - 5,000 m²)</option>
                        <option value="large">Large Industrial Plant / High-Rise (&gt; 5,000 m²)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">3. Service Tier</label>
                      <select 
                        value={serviceTier}
                        onChange={(e) => setServiceTier(e.target.value)}
                        className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="standard">Standard Preventative Maintenance</option>
                        <option value="comprehensive">Comprehensive SLA (24/7 Priority Support)</option>
                        <option value="turnkey">Turnkey Project Engineering & Execution</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Estimated Annual Scope Range</span>
                      <span className="text-2xl font-extrabold text-emerald-950 mt-1 block">
                        {propertySize === 'small' ? 'SAR 25,000 – 60,000' : propertySize === 'medium' ? 'SAR 80,000 – 220,000' : 'SAR 300,000+ (Custom RFQ)'}
                      </span>
                    </div>
                    <div className="text-right hidden sm:block">
                      <span className="text-xs text-emerald-700 font-medium block">Includes site inspection & compliance certification</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Company / Organization Name</label>
                      <input type="text" required placeholder="e.g. Al-Rajhi Industrial" className="w-full p-3 rounded-xl border border-slate-200 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Corporate Email</label>
                      <input type="email" required placeholder="procurement@company.com" className="w-full p-3 rounded-xl border border-slate-200 text-sm" />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Submit Formal RFQ Proposal</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Corporate Profile</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-3">About Best Care Company Ltd. (BCCL)</h1>
              <p className="text-slate-600 mt-4 text-lg">A trusted market leader in Saudi Arabia providing comprehensive technical contracting, engineering, and facility management services.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Engineering Excellence Across Saudi Arabia</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Established with a commitment to uncompromised quality, Best Care Company (BCCL) has grown into a premier corporate service provider. We combine multi-disciplinary engineering expertise with advanced technical standards to serve commercial complexes, industrial plants, government entities, and residential towers.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our dedicated squads across Riyadh, Jeddah, and Dammam operate under rigorous ISO quality management systems and OSHA safety standards, ensuring maximum asset uptime and environmental safety.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <Award className="w-6 h-6 text-emerald-600 mb-2" />
                    <h4 className="font-bold text-sm">ISO Certified</h4>
                    <p className="text-xs text-slate-500 mt-1">ISO 9001, 14001, and OHSAS 18001 standards.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <Users className="w-6 h-6 text-emerald-600 mb-2" />
                    <h4 className="font-bold text-sm">Expert Engineers</h4>
                    <p className="text-xs text-slate-500 mt-1">Over 250 certified technicians & engineers.</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=1000" 
                  alt="BCCL Engineering Team" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* FAQ Accordion Section */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Client Inquiries</span>
                <h2 className="text-3xl font-extrabold mt-3">Frequently Asked Questions</h2>
                <p className="text-slate-600 mt-2">Common client inquiries regarding our MEP contracting, HVAC maintenance, and facility service contracts.</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: "What is included in a standard annual MEP maintenance contract?",
                    answer: "Our annual preventative maintenance (PM) contracts cover scheduled periodic inspections, routine testing and servicing of HVAC chillers, electrical distribution panels, plumbing networks, fire safety systems, and priority dispatch for emergency corrective repairs."
                  },
                  {
                    question: "How quickly do emergency MEP and HVAC repair teams respond across KSA?",
                    answer: "We maintain dedicated rapid-response engineering units stationed in Riyadh, Jeddah, and Dammam. For commercial SLA clients, guaranteed emergency response times are under 2 hours, 24/7/365."
                  },
                  {
                    question: "Are BCCL technicians and engineers certified to international standards?",
                    answer: "Yes. All our technical personnel hold rigorous certifications including ISO 9001 (Quality Management), ISO 14001 (Environmental), OHSAS 18001, and OSHA compliance standards, ensuring strict adherence to safety and excellence."
                  },
                  {
                    question: "Can pest control and industrial cleaning be bundled with MEP contracts?",
                    answer: "Absolutely. We specialize in Integrated Facility Management (IFM) packages. Clients can bundle MEP contracting, HVAC upkeep, HACCP-compliant commercial pest control, and exterior glass facade cleaning into a single unified service agreement."
                  },
                  {
                    question: "What is the onboarding process for new commercial or industrial facilities?",
                    answer: "Onboarding begins with a comprehensive site assessment and asset inventory audit by our lead engineers. We then formulate a custom SLA proposal and asset management plan, with full operational deployment typically completed within 48 hours."
                  }
                ].map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                      >
                        <span className="flex items-center text-base">
                          <HelpCircle className="w-5 h-5 text-emerald-600 mr-3 shrink-0" />
                          {faq.question}
                        </span>
                        <ChevronRight className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-90 text-emerald-600' : 'text-slate-400'}`} />
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Get in Touch</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-3">Contact BCCL Headquarters</h1>
              <p className="text-slate-600 mt-2">Reach out to our regional offices in Riyadh, Jeddah, and Dammam for immediate dispatch or project tenders.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div 
                onClick={() => setActiveRegionPin('riyadh')}
                className={`bg-white p-6 rounded-2xl border shadow-sm text-center cursor-pointer transition-all ${activeRegionPin === 'riyadh' ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-emerald-50/20' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">Riyadh Headquarters</h3>
                <p className="text-xs text-slate-600 mb-4">King Fahd Road, Al Olaya District, Riyadh 12211</p>
                <span className="text-xs font-semibold text-emerald-600">riyadh@bestcare.com.sa</span>
              </div>

              <div 
                onClick={() => setActiveRegionPin('jeddah')}
                className={`bg-white p-6 rounded-2xl border shadow-sm text-center cursor-pointer transition-all ${activeRegionPin === 'jeddah' ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-emerald-50/20' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">Jeddah Branch</h3>
                <p className="text-xs text-slate-600 mb-4">Madinah Road, Al-Safa District, Jeddah 23453</p>
                <span className="text-xs font-semibold text-emerald-600">jeddah@bestcare.com.sa</span>
              </div>

              <div 
                onClick={() => setActiveRegionPin('dammam')}
                className={`bg-white p-6 rounded-2xl border shadow-sm text-center cursor-pointer transition-all ${activeRegionPin === 'dammam' ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-emerald-50/20' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">Dammam Branch</h3>
                <p className="text-xs text-slate-600 mb-4">King Abdulaziz Street, Al-Khobar, Dammam 31952</p>
                <span className="text-xs font-semibold text-emerald-600">dammam@bestcare.com.sa</span>
              </div>
            </div>

            {/* D3-Styled Interactive SVG Map Visualization */}
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">Regional Coverage & Dispatch Radar</span>
                  <h3 className="text-xl font-bold mt-2">Kingdom of Saudi Arabia Operational Map</h3>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                  <button 
                    onClick={() => setActiveRegionPin('riyadh')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeRegionPin === 'riyadh' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    Riyadh HQ
                  </button>
                  <button 
                    onClick={() => setActiveRegionPin('jeddah')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeRegionPin === 'jeddah' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    Jeddah
                  </button>
                  <button 
                    onClick={() => setActiveRegionPin('dammam')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeRegionPin === 'dammam' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    Dammam
                  </button>
                </div>
              </div>

              {/* SVG Map Container */}
              <div className="relative w-full h-[320px] bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
                  {/* D3-styled KSA Stylized Map Landmass Path */}
                  <path 
                    d="M 150 120 Q 250 80 400 90 Q 600 100 700 180 Q 750 250 650 320 Q 500 360 300 340 Q 180 320 130 240 Z" 
                    fill="#1e293b" 
                    stroke="#334155" 
                    strokeWidth="2" 
                  />
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="200" x2="800" y2="200" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
                  <line x1="400" y1="0" x2="400" y2="400" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />

                  {/* Connection Arcs between Riyadh, Jeddah, Dammam */}
                  <path d="M 320 210 Q 300 170 210 180" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  <path d="M 320 210 Q 420 190 580 230" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

                  {/* Jeddah Pin */}
                  <g transform="translate(210, 180)" className="cursor-pointer" onClick={() => setActiveRegionPin('jeddah')}>
                    <circle cx="0" cy="0" r={activeRegionPin === 'jeddah' ? '20' : '10'} fill="#10b981" opacity="0.3" className="animate-ping" />
                    <circle cx="0" cy="0" r="8" fill={activeRegionPin === 'jeddah' ? '#34d399' : '#10b981'} stroke="#ffffff" strokeWidth="2" />
                    <text x="0" y="-16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Jeddah</text>
                  </g>

                  {/* Riyadh Pin */}
                  <g transform="translate(320, 210)" className="cursor-pointer" onClick={() => setActiveRegionPin('riyadh')}>
                    <circle cx="0" cy="0" r={activeRegionPin === 'riyadh' ? '24' : '12'} fill="#10b981" opacity="0.4" className="animate-ping" />
                    <circle cx="0" cy="0" r="10" fill={activeRegionPin === 'riyadh' ? '#34d399' : '#10b981'} stroke="#ffffff" strokeWidth="2.5" />
                    <text x="0" y="-18" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Riyadh (HQ)</text>
                  </g>

                  {/* Dammam Pin */}
                  <g transform="translate(580, 230)" className="cursor-pointer" onClick={() => setActiveRegionPin('dammam')}>
                    <circle cx="0" cy="0" r={activeRegionPin === 'dammam' ? '20' : '10'} fill="#10b981" opacity="0.3" className="animate-ping" />
                    <circle cx="0" cy="0" r="8" fill={activeRegionPin === 'dammam' ? '#34d399' : '#10b981'} stroke="#ffffff" strokeWidth="2" />
                    <text x="0" y="-16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Dammam</text>
                  </g>
                </svg>

                {/* Active Region Info Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-2xl">
                  {activeRegionPin === 'riyadh' && (
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-white">Riyadh Headquarters</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">Active 24/7</span>
                      </div>
                      <p className="text-xs text-slate-300 mb-2">King Fahd Road, Al Olaya District</p>
                      <div className="text-[11px] text-slate-400 flex justify-between pt-2 border-t border-slate-800">
                        <span>Technicians: 120+</span>
                        <span className="text-emerald-400 font-semibold">SLA: &lt; 45 mins</span>
                      </div>
                    </div>
                  )}
                  {activeRegionPin === 'jeddah' && (
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-white">Jeddah Regional Branch</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">Active 24/7</span>
                      </div>
                      <p className="text-xs text-slate-300 mb-2">Madinah Road, Al-Safa District</p>
                      <div className="text-[11px] text-slate-400 flex justify-between pt-2 border-t border-slate-800">
                        <span>Technicians: 85+</span>
                        <span className="text-emerald-400 font-semibold">SLA: &lt; 60 mins</span>
                      </div>
                    </div>
                  )}
                  {activeRegionPin === 'dammam' && (
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-white">Dammam & Eastern Branch</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">Active 24/7</span>
                      </div>
                      <p className="text-xs text-slate-300 mb-2">King Abdulaziz Street, Al-Khobar</p>
                      <div className="text-[11px] text-slate-400 flex justify-between pt-2 border-t border-slate-800">
                        <span>Technicians: 95+</span>
                        <span className="text-emerald-400 font-semibold">SLA: &lt; 50 mins</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10">
              {contactSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Received Successfully</h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-6">
                    Thank you for contacting Best Care Company. Our client relations manager will reach out within 1 business hour.
                  </p>
                  <button 
                    onClick={() => setContactSubmitted(false)}
                    className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold mb-4">Send a Direct Inquiry</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Full Name</label>
                      <input type="text" required placeholder="Eng. Abdullah Al-Saud" className="w-full p-3.5 rounded-xl border border-slate-200 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Corporate Email</label>
                      <input type="email" required placeholder="abdullah@company.com" className="w-full p-3.5 rounded-xl border border-slate-200 text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Phone Number</label>
                      <input type="tel" required placeholder="+966 50 000 0000" className="w-full p-3.5 rounded-xl border border-slate-200 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Service Division Needed</label>
                      <select className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-sm">
                        <option>MEP Contracting & Maintenance</option>
                        <option>HVAC System Solutions</option>
                        <option>Commercial Pest Control</option>
                        <option>Industrial Cleaning & Facade</option>
                        <option>Safety Equipment & PPE</option>
                        <option>Solar Energy Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Project Details / Message</label>
                    <textarea rows={4} required placeholder="Describe your facility and project requirements..." className="w-full p-3.5 rounded-xl border border-slate-200 text-sm"></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all"
                  >
                    Submit Inquiry to BCCL Operations
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`${currentTheme.footerBg} py-12 border-t border-slate-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                BC
              </div>
              <span className="font-bold text-lg">Best Care Company</span>
            </div>
            <p className="text-xs opacity-75 leading-relaxed">
              Leading provider of MEP, HVAC, Pest Control, Cleaning, Safety & Solar Solutions across the Kingdom of Saudi Arabia.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-emerald-400">Core Services</h4>
            <ul className="space-y-2 text-xs opacity-80">
              <li><button onClick={() => setActiveTab('services')} className="hover:underline">MEP Contracting</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:underline">HVAC Maintenance</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:underline">Commercial Pest Control</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:underline">Industrial Cleaning</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-emerald-400">Regional Offices</h4>
            <ul className="space-y-2 text-xs opacity-80">
              <li>Riyadh Headquarters (Al Olaya)</li>
              <li>Jeddah Branch (Al-Safa)</li>
              <li>Dammam Branch (Al-Khobar)</li>
              <li>Emergency Support: 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-emerald-400">AI & SEO Optimized</h4>
            <p className="text-xs opacity-75 mb-3">Structured with Schema.org JSON-LD microdata for instant AI model parsing and search engine visibility.</p>
            <span className="inline-block bg-emerald-900/50 text-emerald-300 text-[10px] font-mono px-2 py-1 rounded border border-emerald-700">Corporation Schema Active</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Best Care Company Ltd. (BCCL). All rights reserved. Kingdom of Saudi Arabia.
        </div>
      </footer>

    </div>
  );
}
