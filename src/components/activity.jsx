import "/dist/activity.css";

const data = {
  Mon: [50, 80, 60],
  Tue: [90, 60, 30],
  Wed: [40, 70, 50],
  Thu: [60, 50, 80],
  Fri: [70, 90, 60],
  Sat: [60, 40, 70],
  Sun: [80, 50, 40]
};

export default function Activity(){

  return (

    <div className="activity-container">

        <div className="header">

            <span>Activity</span>

            <span className="appointments">3 appointment on this week</span>

        </div>
        <div className="chart">

            {Object.entries(data).map(([day, values]) => (
          
                <div key={day} className="day-column">
                    {values.map((value, idx) => (
              
                    <div
                        key={idx}
                        className="bar"
                        style={{
                            height: `${value}px`,
                            backgroundColor: ['#ccc', '#00e0ff', '#5a3fff'][idx]
                        }}
                    >
                    </div>
                    ))}

                    <div className="day-label">{day}</div>

                </div>
            ))}

        </div>
        
    </div>
  );
};

