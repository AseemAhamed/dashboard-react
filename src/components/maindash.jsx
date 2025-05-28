import Anatomy from "./anatomy";
import Calender from "./calender";
import Card from "./card";
import Schedule from "./schedule";
import Activity from "./activity";
import "/dist/maindash.css";

export default function MainDash(){

    return(

        <div className="main-dash-container">

            <div className="main-dash1-container">

                <div className="heading-container">

                    <div>

                        <h1>Dashboard</h1>

                    </div>

                    <div className="week-container">
                        <div className="week">This Week</div>
                        <div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>

                        </div>
                        
                    </div>

                </div>

                <div className="anatomy-main-container">

                    <Anatomy />
                    

                    <div className="details">

                        <a href="">

                            <span>Details</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </span>

                        </a>

                    </div>

                    <Activity/>

                </div>

            </div>
            <div className="main-dash2-container">

                <div className="calender-main-container">

                    <Calender />

                </div>
                <div className="appointment-card">

                    <Card 
                        heading="Dentist" 
                        image="https://img.icons8.com/matisse/100/tooth.png"
                        alt="teeth-image"
                        doctor="Dr. Cameron Williamson"
                    />
                    <Card 
                        heading="Physiotherap Appointment"
                        image="https://img.icons8.com/color/48/biceps.png"
                        alt="bicep-image"
                        doctor="Dr. Kevin Djones"
                    />

                </div>
                <div className="schedule-card">

                    <h2>The Upcoming Schedule</h2>
                    <Schedule/>

                </div>

            </div>

        </div>

    );

}