import { useState } from 'react';
import '../styles/calender.css';

export default function Calender(){

    const [selectedDate, setSelectedDate] = useState("2021-10-26");
    const [selectedTime, setSelectedTime] = useState("09:00");

    const days = [
        { day: "Mon", date: 22, times: ["10:00", "11:00", "12:00"] },
        { day: "Tue", date: 23, times: ["10:00", "11:00", "12:00"] },
        { day: "Wed", date: 24, times: ["10:00", "11:00", "12:00"] },
        { day: "Thu", date: 26, times: ["10:00", "11:00", "12:00"] },
        { day: "Fri", date: 27, times: ["10:00", "11:00", "12:00"] },
        { day: "Sat", date: 28, times: ["10:00", "11:00", "12:00"] },
        { day: "Sun", date: 29, times: ["10:00", "11:00", "12:00"] },
    ];

    const handleTimeClick = (date, time) => {

        setSelectedDate(`2021-10-${date}`);
        setSelectedTime(time);

    }

    return(

        <div className="calender-container">

            <div className="calender-top" >

                <div className="calender-month">

                    <h3>October 21</h3>

                </div>
                <div className="calender-buttons">

                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </a>

                </div>

            </div>
            <div className="calender-bottom">

                <div className="dates-container">

                    {days.map(({ day, date, times }) => (

                        <div id="dates" key={date}>

                            <div className="day">{day}</div>
                            <div className="date">{date}</div>
                            <div className="time">

                                {times.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => handleTimeClick(date, time)}
                                    className="button-selector"
                                >
                                    {time}
                                </button>
                                ))}
                                
                            </div>

                        </div>

                    ) )}

                </div>

            </div>

        </div>

    );

}

{/* <div className="mt-2 space-y-1">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(date, time)}
                  className={`block w-full py-1 rounded-lg text-sm ${
                    selectedDate === `2021-10-${date}` && selectedTime === time
                      ? "bg-blue-600 text-white"
                      : "bg-white hover:bg-blue-100"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div> */}

