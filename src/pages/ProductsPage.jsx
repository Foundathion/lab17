import React, { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { menuItems } from '../data/menuData'
import DownloadLink from '../components/DownloadLink'

const ProductsPage = () => {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('ALL')

  const filteredItems = filter === 'ALL' 
    ? menuItems 
    : menuItems.filter(item => item.voltage === filter)

  return (
    <div className="page products-page">
      <h1>{t('products.title')}</h1>
      <div className="voltage-filters">
        <button onClick={() => setFilter('ALL')} className={filter === 'ALL' ? 'active' : ''}>{t('products.filterAll')}</button>
        <button onClick={() => setFilter('220V')} className={filter === '220V' ? 'active' : ''}>{t('products.filter220')}</button>
        <button onClick={() => setFilter('380V')} className={filter === '380V' ? 'active' : ''}>{t('products.filter380')}</button>
        <button onClick={() => setFilter('12V')} className={filter === '12V' ? 'active' : ''}>{t('products.filter12')}</button>
      </div>
      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card">
            <h3>{item.name}</h3>
            <p className="voltage-badge">{item.voltage}</p>
            <p className="ingredients">{item.ingredients}</p>
            <p className="price">{item.price} {t('products.price')}</p>
            <p className="quote">«{item.quote}»</p>
          </div>
        ))}
      </div>
      <DownloadLink text={t('products.download')} fileUrl="/menu.pdf" />
    </div>
  )
}

export default ProductsPage