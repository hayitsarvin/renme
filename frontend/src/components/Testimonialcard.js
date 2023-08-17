import React from 'react'

const Testimonialcard = ({data,pick}) => {
  return (
    <div className={'testimonial-card '+ pick}>
        {/* <div > */}
    <div className='testimonial-card-image-div'>
        <img src={data.image.src}className='testimonial-card-image' />
    </div>
    {/* </div> */}
    <div className='testimonial-card-info-div'>
        <div className='testimonial-background-circle'></div>
        <div className='testimonial-name-div'>
            <div className='quote-icon-div'>
                <img src='/icons/left-quote.png' className='quote-icon' />
            </div>
            <h2 className='testimonial-name'>{data.name}</h2>
        </div>
        <div className='testimonial-quote-div'>
            <p className='quote' >{data.quote}</p>
        </div>
        <div className='testimonial-id-div'>
            <div className='quote-icon-div'>
                <img src='/icons/right-quote.png' className='quote-icon' />
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonialcard