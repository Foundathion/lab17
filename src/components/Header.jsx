import React from 'react'
import { NavLink } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'
import { useLanguage } from '../i18n/LanguageContext'

const Header = () => {
  const { t } = useLanguage()
  const navItems = ['home', 'news', 'about', 'contact', 'products', 'booking']

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <NavLink to="/">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">VoltKoffee</span>
          </NavLink>
        </div>
        <nav className="desktop-nav">
          {navItems.map(item => (
            <NavLink 
              key={item} 
              to={item === 'home' ? '/' : `/${item}`}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {t(`nav.${item}`)}
            </NavLink>
          ))}
        </nav>
        <LanguageSwitcher />
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header