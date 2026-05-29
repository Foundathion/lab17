import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-contacts">
          <p>{t('footer.address')}</p>
          <p>{t('footer.phone')}</p>
          <p>{t('footer.creator')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer