import React, { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const ContactPage = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // имитация отправки
    console.log('Form submitted', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="page contact-page">
      <h1>{t('contact.title')}</h1>
      <div className="contact-info">
        <p>{t('contact.phone')}</p>
        <p>{t('contact.email')}</p>
        <p>{t('contact.social')}: @volt_koffee</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder={t('contact.form.name')} value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder={t('contact.form.email')} value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder={t('contact.form.message')} rows="4" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">{t('contact.form.send')}</button>
        {submitted && <p className="success">{t('booking.success')}</p>}
      </form>
    </div>
  )
}

export default ContactPage