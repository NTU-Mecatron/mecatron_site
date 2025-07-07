import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mecatronLogo from './assets/logos/mecatronLogo.png';

const sections = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'team', label: 'Our Team', path: '/team',
    submenu: [
      { id: 'team-main', label: 'Our Team', path: '/team' },
      { id: 'focus', label: 'Our Focus', path: '/focus' },
    ]
  },
  { id: 'vehicles', label: 'Vehicles', path: '/vehicles',
    submenu: [
      { id: 'vehicles-main', label: 'Vehicles', path: '/vehicles' },
      { id: 'kevin', label: 'Kevin', path: '/kevin' },
      { id: 'lucy', label: 'Lucy', path: '/lucy' },
    ]
  },
  { id: 'competitions', label: 'Competitions', path: '/competitions',
    submenu: [
      { id: 'competitions-main', label: 'Competitions', path: '/competitions' },
      { id: 'robosub2025', label: 'Robosub 2025', path: '/robosub2025' },
      { id: 'sauvc2025', label: 'SAUVC 2025', path: '/sauvc2025' },
      { id: 'materov2024', label: 'MATE ROV 2024', path: '/materov2024' },
      { id: 'sauvc2024', label: 'SAUVC 2024', path: '/sauvc2024' },
    ]
  },
  { id: 'outreach', label: 'Outreach', path: '/outreach',
    submenu: [
      { id: 'outreach-main', label: 'Outreach', path: '/outreach' },
      { id: '3dpen', label: '3D Pen Series', path: '/3dpen' },
      { id: 'yyss', label: 'YYSS Marine Tech Workshop', path: '/yyss' },
      { id: 'marinevehicle', label: 'Marine Vehicle Workshop', path: '/marinevehicle' },
      { id: 'computervision', label: 'Computer Vision', path: '/computervision' },
      { id: 'blender3d', label: 'Blender3D', path: '/blender3d' },
    ]
  },
  { id: 'sponsors', label: 'Sponsors', path: '/sponsors' },
  { id: 'contact', label: 'Contact Us', path: '/contact',
    submenu: [
      { id: 'contact-main', label: 'Contact Us', path: '/contact' },
      { id: 'joinus', label: 'Join Us', path: '/joinus' },
    ]
  },
];

export default function Navbar({ scrollToSection }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open
  const inputRef = useRef(null);

  // Scroll hide/show logic
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 0) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = search.trim()
    ? [
        ...sections.flatMap(s =>
          s.submenu
            ? s.submenu.filter(sub => sub.label.toLowerCase().includes(search.toLowerCase()))
            : s.label.toLowerCase().includes(search.toLowerCase())
            ? [s]
            : []
        ),
      ]
    : [];

  const handleSelect = (path) => {
    setSearch('');
    setShowDropdown(false);
    setExpanded(false);
    navigate(path);
  };

  const handleExpand = () => {
    setExpanded(true);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 100);
  };

  const handleCollapse = () => {
    if (!search) setExpanded(false);
    setShowDropdown(false);
  };

  return (
    <nav
      className={`w-full flex items-center justify-between px-8 py-4 bg-[#232323] fixed top-0 left-0 z-50 shadow-lg transition-transform duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="flex items-center h-8">
        <img src={mecatronLogo} alt="Mecatron Logo" className="h-8 w-auto object-contain" />
      </div>
      <div className="flex items-center space-x-8">
        {sections.filter(s => s.id !== 'kevin').map((s) => (
          s.submenu ? (
            <div
              key={s.id}
              className="relative group"
              onMouseEnter={() => setOpenMenu(s.id)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={s.path}
                className="text-base font-medium text-white hover:text-orange-400 transition-colors duration-200"
              >
                {s.label}
              </Link>
              <div
                className={`absolute left-0 mt-2 bg-[#232323] border border-gray-700 rounded-lg shadow-lg min-w-[180px] z-40 transition-all duration-200 ${openMenu === s.id ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                {(s.submenu.filter(sub => sub.path !== s.path)).map(sub => (
                  <Link
                    key={sub.id}
                    to={sub.path}
                    className="block px-4 py-2 text-white hover:bg-orange-500 hover:text-white rounded-lg transition"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            location.pathname === '/' && scrollToSection ? (
              <button
                key={s.id}
                onClick={() => scrollToSection && scrollToSection(s.id)}
                className={
                  'text-base font-medium hover:text-orange-400 transition-colors duration-200' +
                  (s.id === 'home' ? ' text-orange-400' : ' text-white')
                }
              >
                {s.label}
              </button>
            ) : (
              <Link
                key={s.id}
                to={s.path}
                className="text-base font-medium text-white hover:text-orange-400 transition-colors duration-200"
              >
                {s.label}
              </Link>
            )
          )
        ))}
      </div>
      {/* Animated search icon/input */}
      <div
        className={`relative ml-8 flex items-center transition-all duration-300 ${expanded ? 'w-56' : 'w-10'}`}
        onMouseEnter={handleExpand}
        onMouseLeave={handleCollapse}
      >
        <button
          className={`absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#181818] text-white border border-gray-600 transition-all duration-300 ${expanded ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}
          style={{ zIndex: 2 }}
          tabIndex={0}
          onFocus={handleExpand}
          onBlur={handleCollapse}
          aria-label="Search"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={e => { setSearch(e.target.value); setShowDropdown(true); }}
          onFocus={handleExpand}
          onBlur={handleCollapse}
          placeholder="Search pages..."
          className={`pl-12 pr-4 py-2 rounded-lg bg-[#181818] text-white border border-gray-600 focus:outline-none focus:border-orange-500 w-full transition-all duration-300 ${expanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          style={{ zIndex: 10 }}
        />
        {showDropdown && filtered.length > 0 && expanded && (
          <div className="absolute left-0 right-0 top-full pt-2 w-full bg-[#232323] border border-gray-700 rounded-lg shadow-lg z-40">
            {filtered.map(s => (
              s.submenu ? (
                <div key={s.id} className="block w-full text-left px-4 py-2 text-white hover:bg-orange-500 hover:text-white rounded-lg transition">
                  {s.label}
                  <div className="ml-4 mt-1 bg-[#181818] border border-gray-600 rounded-lg shadow-inner">
                    {(s.submenu.filter(sub => sub.path !== s.path)).map(sub => (
                      <Link
                        key={sub.id}
                        to={sub.path}
                        className="block px-4 py-2 text-white hover:bg-orange-500 hover:text-white rounded-lg transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={s.id}
                  onMouseDown={() => handleSelect(s.path)}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-orange-500 hover:text-white rounded-lg transition"
                >
                  {s.label}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
} 