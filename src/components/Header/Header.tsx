import './Header.scss';
import { FacebookIcon, LinkedinIcon } from 'lucide-react';
import PortalLogo from "../../assets/portalLogo.png";
import Button from '../ui/button/Button';



const Header = () => {
    const iconStyles = {
        padding: "5px", 
        backgroundColor: "#5d91f7", 
        color: "white", 
        borderRadius: "99px"
    }
    const buttonStyle = {
        padding: "10px 1rem", 
        borderRadius: "20px", 
        background: "#5d91f7", 
        color: "white"
    }
    return (
        <div className='header'>
            {/* header left */}
            <div className="headerLeft">
                <FacebookIcon size={"2rem"} style={iconStyles}/>
                <LinkedinIcon size={"2rem"} style={iconStyles}/>
            </div>

            <div className="headerMiddle">
                <img src={PortalLogo} alt="portal-logo" />
                <h1>PortalHQ Blog</h1>
            </div>

            <div className="headerRight">
                <Button text={"Subscribe"} styles={buttonStyle}/>
            </div>
        </div>
    )
}

export default Header;