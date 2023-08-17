import React from 'react'

const DateCard = ({val, booked , clicked , picked, pickedDate, nameOfMonth , month , choose}) => {
  const pickedCard = () => {
 
    if(val == pickedDate.startDate.day && month == pickedDate.startDate.month){

      return "clicked"
  }else if(val == pickedDate.endDate.day && month == pickedDate.endDate.month){
    return "clicked"
  } if(pickedDate.startDate.day != 0 && pickedDate.endDate.day != 0){
    if(val > pickedDate.startDate.day && month == pickedDate.startDate.month ){
      if(val < pickedDate.endDate.day){
        return "picked"

      }
      
    }else if(val < pickedDate.endDate.day && month == pickedDate.endDate.month  ){
      if(val > pickedDate.startDate.day){
        return "picked"
      }
     
    }
    if(pickedDate.startDate.month != pickedDate.endDate.month){
      if(val > pickedDate.startDate.day && month == pickedDate.startDate.month ){
        
          return "picked"
  
        
        
      }else if(val < pickedDate.endDate.day && month == pickedDate.endDate.month  ){
       
          return "picked"
        
       
      }
    }
  }
  }
  const pickDate = (day,month) => {
    choose(day,month)

  }
  return (
    <div  className={"date-card " + pickedCard() + (booked ? " booked" : "") } onClick={() => pickDate(val,month)}>
        <p className='date-number '>{val}</p> 
    </div>
  )
}

export default DateCard