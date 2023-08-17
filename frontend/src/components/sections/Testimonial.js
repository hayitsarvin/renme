import React,{useState} from 'react'
import "../../styles/components/testimonial.css"
import Testimonialcard from '../Testimonialcard'

const testimonials = [
    {
        id:1,
        name:"SARA B JORDAN",
        image:{
            src:"/images/person.jpg"
        },
        quote:"I am very grateful to Mr. Johnson for his good manners and accurate timing, I am very satisfied"
    },
    {
        id:2,
        name:"mike B JORDAN",
        image:{
            src:"/images/person2.jpg"
        },
        quote:"this site is awesome i can rent everything that i want and i dont have to spend a lot of money to buy it."
    },
    {
        id:3,
        name:"john doe",
        image:{
            src:"/images/person3.jpg"
        },
        quote:"wow my mind is blowing. how great this site is i love it you should use it right now just wow."
    },
    {
        id:4,
        name:"jane doe",
        image:{
            src:"/images/person4.jpg"
        },
        quote:"wow my mind is blowing. how great this site is i love it you should use it right now just wow."
    }
]
const Testimonial = ({dimensions}) => {
    const [testimonialActive, setTestimonialActive] = useState(0);

    const pickActiveTestimonial = (id,active) => {
        if(id == active){
            return "active"
        }else if(id == (active == testimonials.length - 1 ? 0 : (active + 1))){
            return "next"
        }else if(id == (active == 0 ? testimonials.length -1 : (active - 1))){
            return "prev"
        }else{
            return "d-none"
        }
    }
    const nextTestimonial = () => {
        
        if(testimonialActive < (testimonials.length - 1)){
            setTestimonialActive(testimonialActive + 1)

        }else if(testimonialActive == (testimonials.length - 1)){
            setTestimonialActive(0)
    
            }
       
    }
    const prevTestimonial = () => {
        if(testimonialActive > 0){
            setTestimonialActive(testimonialActive - 1)
        }else if(testimonialActive == 0){
            setTestimonialActive(testimonials.length - 1)
        }
        
    }
    
  return (
    <div className='testimonial-section container section' id='testimonial'>
        <h2 className='title'>what our clients say?!</h2>
        

        <div className='testimonial-carousel'>
        <div className={dimensions.width <= 435 ? 'left-slide-div d-n' :"left-slide-div "} onClick={prevTestimonial}>
            <div className='slide-btn-circle'>
                <img src='/icons/arrow_left.png' className='slide-icon'/>
            </div>
           
        </div>
        <div className='testimonial-card-and-number-div'>
        <div className='testimonials-card-div-mask'>
            {
                testimonials.map((item , id) => {
                    return (
                    <Testimonialcard  data={item} pick={pickActiveTestimonial(id,testimonialActive)}/>
                    )

                })
            }


        </div>
        {
            dimensions.width <= 435 ?(
               <div className='mobile-testimonial-btns-div'>
                <div className={dimensions.width >= 435 ? 'left-slide-div d-n' :"left-slide-div "} onClick={prevTestimonial}>
            <div className='slide-btn-circle'>
                <img src='/icons/arrow_left.png' className='slide-icon'/>
            </div>
           
        </div>
                <div className='slide-number-div'>
            {
                testimonials.map((item,id) => {
                    return(
                        <div className={'slide-number-circle ' + pickActiveTestimonial(id,testimonialActive)}></div>
                    )
                })
            }
         </div>
         <div className={dimensions.width >= 435 ? 'right-slide-div d-n' :"right-slide-div "}  onClick={nextTestimonial}>
                <div className='slide-btn-circle'>
                        <img src='/icons/arrow_right.png' className='slide-icon'/>
                    </div>
                </div>
               </div>
            ):(
<div className='slide-number-div'>
            {
                testimonials.map((item,id) => {
                    return(
                        <div className={'slide-number-circle ' + pickActiveTestimonial(id,testimonialActive)}></div>
                    )
                })
            }
         </div>
            )
        }

        
        </div>
        <div className={dimensions.width <= 435 ? 'right-slide-div d-n' :"right-slide-div "}  onClick={nextTestimonial}>
                <div className='slide-btn-circle'>
                        <img src='/icons/arrow_right.png' className='slide-icon'/>
                    </div>
                </div>
        </div>
        
       
    </div>
  )
}

export default Testimonial