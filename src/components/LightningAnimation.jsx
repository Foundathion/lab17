import React, { useEffect, useState } from 'react'

const LightningAnimation = () => {
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true)
      setTimeout(() => setFlash(false), 150)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`lightning-overlay ${flash ? 'flash' : ''}`}>
      <div className="lightning-bolt"></div>
    </div>
  )
}

export default LightningAnimation