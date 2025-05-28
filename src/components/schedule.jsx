import ScheduleDay from "./scheduleday";


export default function Schedule(){

    return(

        <div className="schedule-container">

            <div className="schedule-day">

                <ScheduleDay scheduleday="On Thursday"/>
                <ScheduleDay scheduleday="On Friday" />
                

            </div>

        </div>

    );

}