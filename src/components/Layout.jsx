import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useLanguage } from '../i18n/LanguageContext'

const Layout = () => {
  const { t } = useLanguage()
  const location = useLocation()

  // данные для тегов и баннеров (статичны)
  const tags = ['кофе', 'вольтер', 'энергия', 'розетки', 'лекции', '380V']

  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-layout">
        {/* Левая колонка (Section) - навигация + баннеры */}
        <aside className="section-col">
          <div className="nav-links-vertical">
            <h4>Навигация</h4>
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/news">Новости</a></li>
              <li><a href="/about">Об авторе</a></li>
              <li><a href="/contact">Обратная связь</a></li>
              <li><a href="/products">Продукты и услуги</a></li>
              <li><a href="/booking">Бронирование</a></li>
            </ul>
          </div>
          <div className="banner-placeholder">
            <p>Рекламный баннер</p>
            <small>Спецпредложение дня</small>
          </div>
        </aside>

        {/* Центральная колонка (Article) - контент страницы */}
        <main className="article-col">
          <Outlet />
        </main>

        {/* Правая колонка (Aside) - облако тегов + баннеры */}
        <aside className="aside-col">
          <div className="tag-cloud">
            <h4>{t('aside.tags')}</h4>
            <div className="tags">
              {tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
          <div className="banner-placeholder">
            <p>{t('aside.banners')}</p>
            <small>Акция: второй кофе в подарок</small>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default Layout