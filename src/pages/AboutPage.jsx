import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const AboutPage = () => {
  const { t } = useLanguage()

  return (
    <div className="page about-page">
      <h1>{t('about.title')}</h1>
      <div className="philosophy">
        <p>{t('about.text')}</p>
        <div className="lightning-mini"></div>
      </div>
    </div>
  )
}

export default AboutPage