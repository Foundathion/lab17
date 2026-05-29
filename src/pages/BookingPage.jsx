import React, { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const BookingPage = () => {
  const { t } = useLanguage()
  const [booking, setBooking] = useState({ date: '', time: '', placeType: 'standard', name: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking request', booking)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setBooking({ date: '', time: '', placeType: 'standard', name: '', phone: '' })
  }

  return (
    <div className="page booking-page">
      <h1>{t('booking.title')}</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input type="date" name="date" value={booking.date} onChange={handleChange} required />
        <input type="time" name="time" value={booking.time} onChange={handleChange} required />
        <select name="placeType" value={booking.placeType} onChange={handleChange}>
          <option value="standard">{t('booking.standard')}</option>
          <option value="socket">{t('booking.socket')}</option>
          <option value="vip">{t('booking.vip')}</option>
        </select>
        <input type="text" name="name" placeholder={t('booking.name')} value={booking.name} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder={t('booking.phone')} value={booking.phone} onChange={handleChange} required />
        <button type="submit">{t('booking.submit')}</button>
        {submitted && <p className="success">{t('booking.success')}</p>}
      </form>
    </div>
  )
}

export default BookingPage