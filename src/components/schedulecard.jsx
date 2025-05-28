import "./dist/schedulecard.css";

export default function ScheduleDay(props) {

    return (

        <>

            <div className="schedule-card-container">

                <div className="schedule-card-header">

                    <div className="schedule-card-heading">{props.scheduleheading}</div>
                    <div className="schedule-card-img">
                        <img width="30" height="30" src={props.img} alt={props.alt}/>
                    </div>

                </div>
                <div className="schedule-card-time">
                    09:00-11:00
                </div>
                    

            </div>

        </>


    );

}