import { useEffect, useState } from "react";

function CurrentDate() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(updateDate, 1000);
    
      return function cleanup(){
        clearInterval(timer);
      }
    }, [])
    
    const updateDate = () => {
        setDate(new Date());
    }

    const pmOrAm = ((date.getHours() >= 12) ? "PM" : "AM");
    const istHours = (Math.floor(date.getTimezoneOffset() / 60) * -1);
    const istminutes = (((Math.abs(date.getTimezoneOffset()) % 60) > 0) ? `:${(Math.abs(date.getTimezoneOffset()) % 60)}` : '');
    const plusOrMinus =  ((date.getTimezoneOffset() < 0) ? '+' : '-');

  return (
    <div className='div-date'>
        { date.toString().slice(4,7) + " " + date.getDate() + ", "+ date.getFullYear() + ", " + date.toLocaleTimeString()  
          + " " + pmOrAm + " GMT " + plusOrMinus + istHours + istminutes}
    </div>
  );
}

export default CurrentDate;