import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage()

  return (
    <div className="language-switcher">
      <button 
        className={lang === 'ru' ? 'active' : ''} 
        onClick={() => setLang('ru')}
      >
        RU
      </button>
      <button 
        className={lang === 'en' ? 'active' : ''} 
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher