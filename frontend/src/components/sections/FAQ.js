import React from 'react'
import FAQCard from '../FAQCard'
import "../../styles/components/faq.css"
const faqs = [
    {
        id:1,
        question:"what is rentnow ?",
        answer:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id:2,
        question:"how it works?",
        answer:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id:3,
        question:"what can i rent?",
        answer:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id:4,
        question:"how to brrow item?",
        answer:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    }
    
]
const FAQ = () => {
  return (
    <div className='faq-section section' id='faq'>
        <div className='container'>
        <h1 className='title'>FAQ</h1>
        <div className='faq-cards-div'>
            {
                faqs.map((item,id) => {
                    return(
                        <FAQCard data={item} />
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default FAQ