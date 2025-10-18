import "./Hero.scss";
import HeroLogo from "../../assets/HeroImg.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="heroLeft">
                <img src={HeroLogo} alt="hero-png" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, rerum et. Est!</p>
                <span>September 25, 2025</span>
            </div>

            <div className="heroRight">
                {/* build a card component with img and text side by side */}
                <div className="heroRightCard">
                    <img src={HeroLogo} alt="hero-png" />
                    <div className="heroRightCardContent">
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                        <span>September 24, 2025</span>
                    </div>
                </div>
                <div className="heroRightCard">
                    <img src={HeroLogo} alt="hero-png" />
                    <div className="heroRightCardContent">
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                        <span>September 24, 2025</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;