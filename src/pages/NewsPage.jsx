import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { newsItems } from '../data/newsData'

const NewsPage = () => {
  const { t, lang } = useLanguage()

  return (
    <div className="page news-page">
      <h1>{t('news.title')}</h1>
      {newsItems.map(news => (
        <article key={news.id} className="news-card">
          <h3>{news.title}</h3>
          <p className="news-date">{news.date}</p>
          <p>{news.content}</p>
          <button className="read-more">{t('news.readMore')}</button>
        </article>
      ))}
    </div>
  )
}

export default NewsPage 