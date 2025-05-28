import ScheduleCard from "./schedulecard";
import "./scheduleday.css";

export default function ScheduleDay(props) {

    return (

        <>

            <div className="schedule-day-card-day">{props.scheduleday}</div>
            <div className="schedule-day-card-container">

                <ScheduleCard 
                scheduleheading="Health Checkup Complete" 
                img="https://img.icons8.com/bubbles/30/injection.png"
                alt="injection"
                />
                <ScheduleCard 
                scheduleheading="Ophthalmologist" 
                img="https://img.icons8.com/emoji/30/eye-emoji.png"
                alt="eye"/>

            </div>

        </>


    );

}