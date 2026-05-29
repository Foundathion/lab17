import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = ['home', 'news', 'about', 'contact', 'products', 'booking']

  return (
    <div className="mobile-menu">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
            {navItems.map(item => (
              <NavLink 
                key={item} 
                to={item === 'home' ? '/' : `/${item}`}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item}`)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu