import "../styles/anatomy.css"
import HumanBody from "../assets/human_body.png"

export default function Anatomy(){

    return(

        <div className="anatomy-container">

            <div className="human-anatomy-img">

                <img src={HumanBody}alt="" />

            </div>
            <div className="organ-health-container">

                <div className="lungs">

                    <div className="organ-desc">

                        <div className="organ-img">
                            <img src="https://img.icons8.com/stickers/100/lungs.png" alt="lungs-image" />
                        </div>
                        <div className="organ-heading">Lungs</div>

                    </div>
                    <p>Date: 26-11-2021</p>
                    <div className="scroll-bar"></div>

                </div>
                <div className="teeth">

                    <div className="organ-desc">

                        <div className="organ-img">
                            <img src="https://img.icons8.com/matisse/100/tooth.png" alt="teeth-image" />
                        </div>
                        <div className="organ-heading">Teeth</div>

                    </div>
                    <p>Date: 27-11-2021</p>
                    <div className="scroll-bar"></div>

                </div>
                <div className="bone">

                    <div className="organ-desc">

                        <div className="organ-img">
                            <img src="https://img.icons8.com/external-justicon-flat-justicon/64/external-bone-human-organs-justicon-flat-justicon.png" alt="bone-img" />
                        </div>
                        <div className="organ-heading">Bone</div>

                    </div>
                    <p>Date: 28-11-2021</p>
                    <div className="scroll-bar"></div>

                </div>

            </div>

        </div>

    );

}