/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ShieldCheck,
  Wrench,
  Zap,
  Flame,
  Droplets,
  Wind,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Building2,
  Cpu,
  Sparkles,
  Award,
  Users,
  Search,
  FileText,
  Sliders,
  Calculator,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  Factory,
  Hotel,
  Stethoscope,
  Store,
  ArrowRight,
  HelpCircle,
  Download,
  Info
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  specs?: string[];
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'calculator' | 'about' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('MEP Contracting');
  const [quoteSector, setQuoteSector] = useState('Commercial');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Comprehensive Services Data compiled from BCCL company profiles with professional photos
  const servicesData: ServiceItem[] = [
    {
      id: 'mep-contracting',
      title: 'MEP Contracting & Engineering Design',
      category: 'MEP & HVAC',
      description: 'End-to-end mechanical, electrical, and plumbing engineering, design, and turnkey implementation conforming to international standards.',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
      features: [
        'HVAC Chillers, VRV/VRF, Package Units & AHUs',
        'In-house engineering & BIM ready layouts',
        'Testing, Adjusting, and Balancing (TAB)',
        'Single point of responsibility for design to commissioning'
      ],
      specs: ['ISO 9001:2015 Certified', 'SMACNA Standards', 'ASHRAE Compliant']
    },
    {
      id: 'electrical-substations',
      title: 'Electrical Works & Substation Maintenance',
      category: 'MEP & HVAC',
      description: 'High voltage (HV) and low voltage (LV) power supply repair, substation testing, MDB/SDB distribution panels, and industrial automation.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      features: [
        'Substation thermography & partial discharge analysis',
        'Power distribution boards (MDB/SDB) & cabling',
        'Industrial automation (PLC panels, VFD drives, SCADA)',
        'Building Management Systems (BMS)'
      ],
      specs: ['24/7 Emergency Response within 2 hours in Jeddah', 'Saudi Council of Engineers Approved']
    },
    {
      id: 'pest-control',
      title: 'Integrated Pest Management (IPM)',
      category: 'Pest Control',
      description: 'Eco-friendly, WHO-approved pest control solutions and reporting structures for industrial, pharmaceutical, and hospitality sectors.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1584467735811-628b088319f6?auto=format&fit=crop&w=800&q=80',
      features: [
        'Ant, Cockroach (Gel baiting & residual spray)',
        'Bed Bug control (Thermal & dust treatments)',
        'Rodent management (Bait stations & mechanical traps)',
        'Termite pre & post-construction drilling & injection'
      ],
      specs: ['WHO-approved chemicals', 'Audit-ready digital reporting structures', 'ISO Compliant']
    },
    {
      id: 'cleaning-hygiene',
      title: 'Commercial & Industrial Cleaning',
      category: 'Cleaning',
      description: 'Pristine facility hygiene, ride-on floor scrubbers, high-pressure washers, duct cleaning, and facade glass cladding cradle cleaning.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      features: [
        'Industrial degreasers & floor epoxy care',
        'Tower glass cladding cradle & rope-access cleaning',
        'Restaurant hood & duct degreasing',
        'Carpet & upholstery steam extraction'
      ],
      specs: ['Hospital-grade disinfectants', 'Eco-friendly options available']
    },
    {
      id: 'safety-ppe',
      title: 'Civil Defense Approved Safety & PPE',
      category: 'Safety',
      description: 'Certified personal protective equipment, portable fire extinguishers, fire hose reels, emergency exit lighting, and fall protection.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f86f6?auto=format&fit=crop&w=800&q=80',
      features: [
        'Civil Defense approved fire extinguishers (1kg to 9kg CO2/Dry Powder)',
        'EN 361 certified full-body safety harnesses & retractable lifelines',
        'High-visibility clothing with 3M reflective tape',
        'First aid kits & customized safety signage'
      ],
      specs: ['Civil Defense Certified', 'CE & ISO standard PPE']
    },
    {
      id: 'energy-solutions',
      title: 'Solar Energy & Energy Audits',
      category: 'Energy',
      description: 'On-grid and off-grid solar PV systems, LED lighting retrofits, and comprehensive energy audits delivering 8% to 25% electricity savings.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      features: [
        'Turnkey solar power plants for warehouses & rooftops',
        'Detailed energy audits identifying HVAC & motor waste',
        'LED retrofitting with up to 75% lighting power reduction',
        'Net metering & net-zero carbon strategies'
      ],
      specs: ['Saudi Climate Optimized', 'ROI within 8-12 months']
    },
    {
      id: 'tools-machinery',
      title: 'Industrial Tools & Genuine Spares',
      category: 'Equipment',
      description: 'High-grade industrial tools, diagnostic instruments (thermal cameras, vibration meters), and genuine compressor/pump spares.',
      icon: Sliders,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      features: [
        'Thermal cameras & vibration meters for predictive maintenance',
        'Welding equipment (MIG/TIG, inverter welders)',
        'OEM-grade compressor parts, pump seals, and V-belts',
        'Same-day pickup in Jeddah for stock items'
      ],
      specs: ['ISO & CE Certified Tools', 'Tool calibration services']
    },
    {
      id: 'waterproofing',
      title: 'Waterproofing Materials',
      category: 'Materials',
      description: 'Premium waterproofing systems for roofs, basements, water tanks, and wet areas, resistant to Saudi thermal cycling.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
      features: [
        'Cementitious waterproofing for internal wet areas & potable tanks',
        'Seamless liquid elastomeric membranes with UV resistance',
        'Bituminous torch-on sheets for heavy-duty foundations',
        'Crack bridging up to 2mm'
      ],
      specs: ['Non-toxic potable water approved', 'High tensile strength']
    },
    {
      id: 'water-pumps',
      title: 'Water Pumping Systems',
      category: 'Equipment',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      description: 'Supply, installation, and repair of centrifugal, submersible, booster, and sewage pumps for high-rise buildings and industrial loops.',
      icon: Cpu,
      features: [
        'Centrifugal pumps for HVAC chilled water loops',
        'Submersible drainage & deep well pumps',
        'Multi-stage booster pumps with VFD for constant high-rise pressure',
        'Sewage pumps handling up to 50mm solids'
      ],
      specs: ['Low noise operation', 'Integrated pressure tanks']
    },
    {
      id: 'iaq-duct-cleaning',
      title: 'Indoor Air Quality (IAQ) & Duct Testing',
      category: 'MEP & HVAC',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
      description: 'NADCA standard duct cleaning, pressure leakage testing (SMACNA), chemical flushing, and CO2/VOC indoor air quality testing.',
      icon: Wind,
      features: [
        'NADCA standard mechanical duct cleaning & sanitization',
        'SMACNA duct pressure leakage testing',
        'Chilled water pipe chemical flushing & anti-Legionella treatment',
        'LEED-compliant IAQ assessments (PM, VOC, CO2, humidity)'
      ],
      specs: ['ISIAQ Member', 'ASHRAE & EPA compliant']
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  const categories = ['all', 'MEP & HVAC', 'Pest Control', 'Cleaning', 'Safety', 'Energy', 'Equipment', 'Materials'];

  const clientsList = [
    'Petromin KSA', 'Webuild', 'FMSCO', 'Proscape', 'PVH', 'System Alliance',
    'SNAD', 'DJ Auto', 'China Energy', 'Jeep (Petromin)', 'BCCL Contracting',
    'SAPAC', 'Al-Ayuni', 'Petro Rabigh', 'TranJi', 'AIC Steel', 'Aurco',
    'Pearl Australia', 'Al-Yasmin Polyclinic', 'First Fix', 'Shangri-La', 'Multi Systam'
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Utility Bar */}
      <div className="bg-slate-950 border-b border-slate-800 py-2 px-4 text-xs sm:text-sm text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              24/7 Emergency Support in Jeddah & Tabuk
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">ISO 9001:2015 Certified & Civil Defense Approved</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+966553304347" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> +966 55 330 4347
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:contact.trading@bestcares.sa" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> contact.trading@bestcares.sa
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/40 border border-emerald-500/30">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Best Care Company
              </div>
              <div className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">
                BCCL • MEP, HVAC & Facility Solutions KSA
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Core Services' },
              { id: 'calculator', label: 'Quote Calculator' },
              { id: 'about', label: 'About Us' },
              { id: 'contact', label: 'Contact Us' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setActiveTab('calculator')}
              className="bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-red-900/30 transition-all transform hover:-translate-y-0.5"
            >
              Request Quotation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Core Services' },
              { id: 'calculator', label: 'Quote Calculator' },
              { id: 'about', label: 'About Us' },
              { id: 'contact', label: 'Contact Us' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('calculator');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-center shadow-lg"
              >
                Request Quotation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main>
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-7 space-y-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
                    <Award className="w-4 h-4 text-emerald-400" />
                    Kingdom of Saudi Arabia • Founded 2007 • 18+ Years Excellence
                  </div>
                  
                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
                    One Partner. <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                      Total Solutions.
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                    Mechanical | Electrical | Safety | Energy | Cleaning | Pest Control. Delivering professional electro-mechanical contracting, HVAC solutions, and industrial supplies to 125+ clients across Jeddah, Tabuk, and the Kingdom.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => setActiveTab('services')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-emerald-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                    >
                      Explore Core Services <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveTab('calculator')}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
                    >
                      <Calculator className="w-5 h-5 text-emerald-400" /> Request Quotation
                    </button>
                  </div>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800/80">
                    {[
                      { label: 'Years Experience', value: '18+' },
                      { label: 'Valued Clients', value: '125+' },
                      { label: 'Engineers & Staff', value: '60+' },
                      { label: 'Quality Standard', value: 'ISO 9001' }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-black text-emerald-400">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero Feature Card */}
                <div className="lg:col-span-5">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl relative backdrop-blur-xl">
                    <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Civil Defense Approved
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                      Comprehensive Facility Pillars
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">
                      We simplify your operations with eight integrated core pillars designed for industrial plants, commercial towers, hospitals, and residential compounds.
                    </p>

                    <div className="space-y-3">
                      {[
                        'HVAC & MEP Contracting (Chillers, VRV, Ducts)',
                        'Substation Maintenance & Electrical Works',
                        'Integrated Pest Management (IPM & WHO Standards)',
                        'Industrial Cleaning & Glass Cladding',
                        'Civil Defense Approved Fire Systems & PPE',
                        'Solar PV Plants & Energy Audits (8-25% Savings)'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-200 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between items-center">
                      <span className="text-xs text-slate-400">Headquartered in Jeddah</span>
                      <button
                        onClick={() => setActiveTab('contact')}
                        className="text-emerald-400 text-sm font-bold hover:underline flex items-center gap-1"
                      >
                        Contact Branch <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Preview Grid with Photos */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Our Expertise</h2>
                  <h3 className="text-3xl sm:text-4xl font-black text-white">Core Engineering & Facility Solutions</h3>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="mt-4 md:mt-0 text-emerald-400 font-bold hover:underline flex items-center gap-1"
                >
                  View All Services ({servicesData.length}) <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.slice(0, 6).map((service) => {
                  const IconComp = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="bg-slate-800/70 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                          <span className="absolute bottom-3 left-4 text-xs font-bold px-3 py-1 rounded-full bg-slate-900/90 text-emerald-400 border border-slate-700 backdrop-blur-sm">
                            {service.category}
                          </span>
                        </div>

                        <div className="p-6">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feat, idx) => (
                              <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-0">
                        <button
                          onClick={() => {
                            setQuoteService(service.title);
                            setActiveTab('calculator');
                          }}
                          className="w-full bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-700/80 group-hover:border-emerald-500"
                        >
                          Request Quote <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Valued Clients Section */}
            <section className="bg-slate-950 py-16 border-t border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Trusted Across Saudi Arabia</h3>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Over 125+ Valued Clients & Industrial Partners</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {clientsList.map((client, i) => (
                    <div
                      key={i}
                      className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-medium hover:border-emerald-500/50 transition-colors"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-3xl sm:text-5xl font-black text-white">Comprehensive Service Directory</h1>
              <p className="text-slate-300 text-base sm:text-lg">
                Explore BCCL’s end-to-end electro-mechanical, pest control, cleaning, and industrial supply divisions engineered for the Saudi climate.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2 pt-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Detailed Grid with Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-slate-800/80 border border-slate-700/80 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all"
                  >
                    <div>
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                        <span className="absolute bottom-4 left-6 text-xs font-bold px-3 py-1.5 rounded-full bg-slate-900/90 text-emerald-400 border border-slate-700 backdrop-blur-sm">
                          {service.category}
                        </span>
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Key Capabilities:</h4>
                          {service.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {service.specs && (
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/60 mb-2">
                            {service.specs.map((spec, sIdx) => (
                              <span key={sIdx} className="text-xs bg-slate-900/80 text-slate-300 border border-slate-700 px-3 py-1 rounded-lg font-medium">
                                ✓ {spec}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-8 pt-0">
                      <button
                        onClick={() => {
                          setQuoteService(service.title);
                          setActiveTab('calculator');
                        }}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                      >
                        Request Service Quotation <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="max-w-xl mx-auto text-center space-y-4 mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  <Calculator className="w-4 h-4" /> Instant Consultation & Quote
                </div>
                <h1 className="text-3xl font-black text-white">Request a Service Quotation</h1>
                <p className="text-slate-300 text-sm">
                  Select your required division and sector. Our engineering team in Jeddah & Tabuk will respond within 24 hours with a customized proposal.
                </p>
              </div>

              {quoteSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quotation Request Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for partnering with BCCL. Your request for <span className="text-emerald-400 font-semibold">{quoteService}</span> has been routed to our technical estimators.
                  </p>
                  <button
                    onClick={() => setQuoteSubmitted(false)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Select Service / Solution
                      </label>
                      <select
                        value={quoteService}
                        onChange={(e) => setQuoteService(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500"
                      >
                        {servicesData.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Facility / Industry Sector
                      </label>
                      <select
                        value={quoteSector}
                        onChange={(e) => setQuoteSector(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Commercial">Commercial Building / Office</option>
                        <option value="Industrial">Industrial Plant / Warehouse</option>
                        <option value="Healthcare">Healthcare / Hospital / Clinic</option>
                        <option value="Hospitality">Hospitality / Hotel / Restaurant</option>
                        <option value="Residential">Residential Compound</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name / Company
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ahmed Al-Mutairi"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+966 5X XXX XXXX"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Project Details & Scope
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your requirements (e.g. Annual HVAC maintenance contract, chiller testing, pest control for warehouse...)"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200 text-sm focus:outline-none focus:border-emerald-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-4 rounded-xl font-bold shadow-xl shadow-emerald-900/30 transition-all text-base"
                  >
                    Submit Quotation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  <Building2 className="w-4 h-4" /> Company Profile & History
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white">Engineering Excellence Since 2007</h1>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Best Care Company Ltd. (BCCL) is a trusted leader in Mechanical, Electrical, Plumbing (MEP), Pest Control, and facility solutions in Saudi Arabia. Headquartered in Jeddah with a branch in Tabuk, we have successfully supported over 125 clients across industrial, healthcare, commercial, and residential sectors.
                </p>
                <p className="text-slate-300 text-base leading-relaxed">
                  We combine high-grade material supply with professional engineering services — all under one roof. Driven by our motto <span className="text-emerald-400 font-semibold">"Honesty. Hard Work. Dedication."</span>, we ensure compliance with ISO 9001:2015, Civil Defense, SMACNA, and NADCA standards.
                </p>
              </div>

              <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 rounded-3xl p-8 space-y-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-emerald-400" /> Certifications & Compliance
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'ISO 9001:2015 Certified', desc: 'Quality management system guaranteed across all operations.' },
                    { title: 'Civil Defense Approved', desc: 'Fire systems, extinguishers, and emergency lighting certified.' },
                    { title: 'SMACNA Standards', desc: 'Duct leakage testing and air tightness verification.' },
                    { title: 'NADCA Standards', desc: 'Professional air duct cleaning and indoor air quality compliance.' }
                  ].map((cert, i) => (
                    <div key={i} className="bg-slate-900/80 p-4 rounded-xl border border-slate-700">
                      <div className="font-bold text-emerald-400 text-sm mb-1">✓ {cert.title}</div>
                      <div className="text-xs text-slate-400">{cert.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-slate-800 rounded-3xl p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Our Vision
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  To be the leading provider of electro-mechanical, pest control, and facility solutions, delivering exceptional service and innovative techniques to ensure the safety and well-being of our clients and their environments.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-teal-950/40 border border-slate-800 rounded-3xl p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-500"></span> Our Mission
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  To protect homes, businesses, and communities from technical and environmental hazards by providing effective, sustainable solutions through our highly trained team of engineers and certified technicians.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-3xl sm:text-5xl font-black text-white">Get in Touch with BCCL</h1>
              <p className="text-slate-300 text-base">
                Reach out to our headquarters in Jeddah or our branch in Tabuk for 24/7 emergency response, quotations, or technical consultations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Jeddah Headquarters */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 space-y-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Jeddah Headquarters</h3>
                    <p className="text-xs text-emerald-400">Main Office & Warehouse</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Building No: 3755, Old Makkah Branch Road, Al Nazlah Ash Sharqiyah, Jeddah 22335, Near Ministry of Commerce Building, KSA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>+966 55 330 4347 | +966 50 8915 568</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>contact.trading@bestcares.sa / bestcare.bcc@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Tabuk Branch */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 space-y-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Tabuk Branch Office</h3>
                    <p className="text-xs text-teal-400">Northern Region Operations</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span>9HP5+W6X, Al'awayshah, Tabuk 47914, Kingdom of Saudi Arabia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                    <span>+966 56 5075 751 / +966 50 8915 568</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                    <span>contact.trading@bestcares.sa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-16 mt-20 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-bold text-white text-lg">Best Care Company</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              One Partner. Total Solutions. Electro-Mechanical (MEP), HVAC, Pest Control, Cleaning, Safety, and Solar Energy in Saudi Arabia since 2007.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Core Divisions</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-emerald-400">MEP Contracting & HVAC</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-emerald-400">Integrated Pest Management</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-emerald-400">Commercial & Industrial Cleaning</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-emerald-400">Civil Defense Safety & PPE</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-emerald-400">Solar Energy & Audits</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setActiveTab('calculator')} className="hover:text-emerald-400">Instant Quote Calculator</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-emerald-400">About Our Company</button></li>
              <li><button onClick={() => setActiveTab('contact')} className="hover:text-emerald-400">Jeddah & Tabuk Offices</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Locations & Contact</h4>
            <p className="text-xs space-y-1">
              <strong>Jeddah HQ:</strong> Building No: 3755, Old Makkah Branch Rd.<br />
              <strong>Tabuk Branch:</strong> 9HP5+W6X, Al'awayshah<br />
              <strong>Phone:</strong> +966 55 330 4347<br />
              <strong>Email:</strong> contact.trading@bestcares.sa
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Best Care Company Ltd. (BCCL). All Rights Reserved. ISO 9001:2015 Certified.</div>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <span>www.bccl-sa.com</span>
            <span>www.bestcares.sa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
