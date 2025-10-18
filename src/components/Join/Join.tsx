import Button from "../ui/button/Button"
import "./Join.scss"
import Picture from "../../assets/HeroImg.png";

const Join = () => {
    return (
        <div className="join">
            <img src={Picture} alt="join-picture" />
            <div className="joinMain">
                <div className="joinMainForm">
                    <h1>Join Our Learning Community</h1>
                    <p>Subscribe today to stay connected with School activities, academic tips and improving grades.</p>

                    <div className="joinMainFormInput">
                        <input type="text" placeholder="Enter your email address"/>
                    </div>

                    <Button 
                        text="Subscribe"
                        styles={{ 
                            backgroundColor: "white", 
                            color: "#5d91f7",
                            borderRadius: "99px",
                            padding: "10px 30px",
                         }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Join