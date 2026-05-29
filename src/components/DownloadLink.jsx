import React from 'react'

const DownloadLink = ({ text, fileUrl }) => {
  return (
    <a href={fileUrl} download className="download-link">
      📄 {text}
    </a>
  )
}

export default DownloadLink