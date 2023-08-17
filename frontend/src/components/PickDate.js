import React, { useEffect, useState } from 'react'
import DateCard from './DateCard'
import "../styles/components/pickdate.css"
import Loading from './Loading';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";


// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const PickDate = ({dates,setPickedDate,pickedDate ,setStartDate , setEndDate, startDate, endDate , hourly}) => {

    const [bookedDates, setBookedDates] = useState(dates)
    const [loading, setLoading] = useState(true)
    

    const onChange = (dates) => {
      const [start, end] = dates;
     
      setStartDate(start);
      setEndDate(end);

    };
  
    const chooseDate = (day,month,date) => {
        if(day == pickedDate.startDate.day && month == pickedDate.startDate.month){
        setPickedDate({...pickedDate , startDate:{day:0 , month:0 , date:date}})
        return

        }else if(day == pickedDate.endDate.day && month == pickedDate.endDate.month){
            setPickedDate({...pickedDate , endDate:{day:0 , month:0, date:date}})
            return

        }
        if(pickedDate.startDate.day == 0 && pickedDate.startDate.month == 0){
            setPickedDate({...pickedDate , startDate:{day:day , month:month, date:date}})
            return

        }
        if(pickedDate.endDate.day == 0 && pickedDate.endDate.month == 0){
            setPickedDate({...pickedDate , endDate:{day:day , month:month, date:date}})
            return

        }
        if(day < pickedDate.startDate.day && month == pickedDate.startDate.month){
            setPickedDate({...pickedDate , startDate:{day:day , month:month, date:date}})
            return
        }
        setPickedDate({...pickedDate , endDate:{day:day , month:month, date:date}})

        
    }
    const getMonthName = (number) => {
        return monthNames[number]
    }
   
    var dt = new Date();
   const [thisMonth , setThisMonth] = useState([])
   const [nextMonth , setNextMonth] = useState([])
   function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
    //   const thisMonth = []
    //   const nextMonth = []
    const getDaysInfo = (booked , monthArray , month , year,daysCount) => {
        const temp = []
        for(var i = 1 ; i <= daysCount ; i++){
            var isBooked = false
            booked.map((item, id) => {
                console.log("date start" , item.start);
                console.log("date end" , item.end);
                var s = new Date(item.start)
                var e = new Date(item.end)
                
                if(s.getUTCDate() == i && s.getUTCMonth() == month){
                    isBooked = true
                }else if(e.getUTCDate() == i && e.getUTCMonth() == month){
                    isBooked = true
                }if(((s.getUTCMonth() * 30 + s.getUTCDate()) <= (month * 30 + i) ) && ((month * 30 + i) <= (e.getUTCMonth() * 30 + e.getUTCDate()))){
                    isBooked = true
                }
            })
            temp.push({
                id:i,
                day:i,
                booked:isBooked,
                date: new Date(year,month,i)
            })
        }
        
        return temp
    }
    
    useEffect(() => {
        console.log("thismonth" , thisMonth);
        if(thisMonth.length >= 20) {
            setLoading(false)
        console.log("loading in", loading);

        }
        console.log("loading", loading);
    }, [thisMonth ])
    useEffect(() => {
        if(bookedDates){
           
            setThisMonth(getDaysInfo([new Date("2023-07-25")] ,thisMonth,dt.getUTCMonth() ,dt.getFullYear() ,getDaysInMonth(dt.getFullYear(),dt.getUTCMonth()+1)))
            setNextMonth(getDaysInfo(bookedDates ,nextMonth,dt.getUTCMonth() + 1 ,dt.getFullYear() ,getDaysInMonth(dt.getFullYear(),dt.getUTCMonth()+2)))
        }
    },[bookedDates])
    if(loading){
        return(
            <Loading />
        )
    }else{
        return (
            <div className='pick-date-div'>
                <div className='title-div'>
                    <h3 className='label'>pick a date : </h3>
                </div>
                <div className='dates-container'>
                <div className='date-box'>
                {/* <p className='name-of-month'>{getMonthName(dt.getMonth())}</p> */}
                {/* <p className='name-of-month'>start date</p> */}
               
    {
        hourly ? (
       <>horly</>
        ) : (
            <DatePicker
      selected={startDate}
      onChange={onChange}
      
      startDate={startDate}
      endDate={endDate}
      excludeDates={[new Date("2023-07-25"), new Date("2023-07-27")]}
      selectsRange
      inline

    />
        )
    }
                {/* <AirDatepicker /> */}
                {/* <div className='dates-div this-month'>
                        {
                            thisMonth.length >= 20 ? (thisMonth.map( (val ,id) => {
                                return <DateCard choose={chooseDate} nameOfMonth={getMonthName(dt.getMonth())} month={dt.getMonth()} pickedDate={pickedDate} val={val.id } booked={val.booked} clicked={val.clicked} picked={val.picked}/>
                            })) : (null)
                        }
                    </div> */}
                    </div>
                    {/* <div className='date-box'>
                    <p className='name-of-month'>end date</p>
                <input type='date' />
                <input type='date' id="dp" /> */}
                    {/* <p className='name-of-month'>{getMonthName(dt.getMonth() < 11 ? dt.getMonth() + 1 : 0)}</p>
        
                    <div className='dates-div next-month'>
                        {
                            nextMonth.map( (val ,id) => {
                                return <DateCard choose={chooseDate}  pickedDate={pickedDate} month={dt.getMonth()+1} nameOfMonth={getMonthName(dt.getMonth() < 11 ? dt.getMonth() + 1 : 0)}  val={val.id } booked={val.booked} clicked={val.clicked} picked={val.picked}/>
                            })
                        }
                    </div> */}
                    {/* </div> */}
                    </div>
            </div>
          )
    }
  
}

export default PickDate