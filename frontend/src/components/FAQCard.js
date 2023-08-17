import React from 'react'
import "../styles/components/faqcard.css"
const FAQCard = ({data}) => {
    const [active , setActive] = React.useState(false)
    const toggle = () => {
        setActive(!active)
    }
  return (
    <div className={'faq-card ' + (active ? "active" : "") } onClick={toggle}>
        <h2 className='question-title'>{data.question}</h2>
        <div className='underline'></div>
        <p className='answer'>{data.answer}</p>
        <img src='/icons/expand.svg' className='expand' />
    </div>
  )
}

export default FAQCard