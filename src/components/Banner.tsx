import React from 'react'
import BannerImg from '../assets/BANNER.png'
import BannerNew from '../assets/BANNERNEW.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className="image-container">
      <img src={BannerNew} alt="Banner" className="responsive-image" />
    </div>
  )
}

export default Banner
