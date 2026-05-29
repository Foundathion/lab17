import React, { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import LightningAnimation from '../components/LightningAnimation'
import { quotes } from '../data/quotesData'

const HomePage = () => {
  const { lang, t } = useLanguage()
  const [currentQuote, setCurrentQuote] = useState('')

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex][lang])
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * quotes.length)
      setCurrentQuote(quotes[newIndex][lang])
    }, 10000)
    return () => clearInterval(interval)
  }, [lang])

  return (
    <div className="home-page">
      <div className="hero">
        <LightningAnimation />
        <h1>{t('hero.title')}</h1>
        <div className="volt-quote">
          <p>«{currentQuote}» — Вольтер</p>
        </div>
        <a href="/booking" className="btn-zaryad">{t('hero.button')}</a>
      </div>
      <div className="home-content">
        <h2>Добро пожаловать в VoltKoffee</h2>
        <p>Кофе с характером и философией. Зарядитесь смыслом вместе с Вольтером.</p>
      </div>
    </div>
  )
}

export default HomePage