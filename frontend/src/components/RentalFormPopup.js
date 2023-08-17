import React, { useEffect, useState } from 'react'
import "../styles/components/rentalformpopup.css"
import PickDate from './PickDate'
import Btn from './Btn'

const RentalFormPopup = ({close , dates,setPickedDate, pickedDate , whyText, setWhyText,submitRequestHandler,setStartDate , setEndDate, startDate, endDate , hourly , price}) => {
  const [differenceInDays , setDifferenceInDays] = useState(0)
  const diffInDays = () => {
    if(endDate){
      var Difference_In_Time = new Date(Date.parse(endDate)) - new Date(Date.parse(startDate));
      
      // To calculate the no. of days between two dates
      setDifferenceInDays(Difference_In_Time / (1000 * 3600 * 24));
    }else if(startDate){
      setDifferenceInDays(1)
    }else{
      setDifferenceInDays(0)

    }
  }
 useEffect(() => {
  diffInDays()
 }, [startDate,endDate])
  return (
    <div className='rental-form-back-blur'>
    <div className='rental-form-div'>
    <div className='close-btn-div' onClick={() => close()}>
                    <p className='close'>x</p>
                </div>
        <h5 className='title'>Rental Form</h5>
        <PickDate dates={dates} setPickedDate={setPickedDate} pickedDate={pickedDate} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
        <div className='why-to-rent-div'>
            <p className='header-text'>why do you want to rent this item ?</p>
            <textarea type='text' placeholder='type here...' className='why-to-input' rows="6" cols="50"  value={whyText} onChange={(e) => setWhyText(e.target.value)}/>
        </div>
        <div className='price-and-btn-div'>
            <div className='price-div'>
                <p className='price-header'>price to pay for  { differenceInDays} nights :</p>
                <p className='price'>${price * differenceInDays}</p>
                
            </div>
            <div onClick={submitRequestHandler}>
            <Btn background={"black"} text={"request rent"} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default RentalFormPopup