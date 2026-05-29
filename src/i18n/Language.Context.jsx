import React, { createContext, useState, useContext } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ru')

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (let k of keys) {
      if (value && value[k]) value = value[k]
      else return key
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}