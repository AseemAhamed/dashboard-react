import "/dist/card.css";

export default function Card(props){
    
    return(

        <div className="card-container">

            <div className="card-header">

                <div className="card-heading">{props.heading}</div>
                <div className="card-img">
                    <img src={props.image} alt={props.alt}/>
                </div>
                

            </div>
            <div className="card-content">

                <div className="card-time">09:00-11:00</div>
                <div className="card-name">{props.doctor}</div>

            </div>

        </div>

    );

}