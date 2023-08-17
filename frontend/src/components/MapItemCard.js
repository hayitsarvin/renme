import React from 'react'

const MapItemCard = ({src}) => {
  return (
    <div className='map-item-card'>
        <div className='image-mask'>
            <img src={src} className='map-item-image' />
        </div>
    </div>
  )
}

export default MapItemCard