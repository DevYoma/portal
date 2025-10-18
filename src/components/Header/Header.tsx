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
        <div className="flex items-center justify-between py-5 md:py-5 sm:py-4">
            {/* header left */}
            <div className="hidden sm:flex sm:gap-1.5 md:gap-2">
                <FacebookIcon 
                    size={"2rem"} 
                    // style={iconStyles}
                    className="p-[5px] rounded-full bg-[#5d91f7] text-white"
                />
                <LinkedinIcon 
                    size={"2rem"}
                    className="p-[5px] rounded-full bg-[#5d91f7] text-white"
                />
            </div>

            <div className="flex items-center gap-1.5">
                <img 
                    src={PortalLogo} 
                    alt="portal-logo"
                    className="w-[50px] h-[50px] sm:w-[35px] sm:h-[35px]"
                />
                <h1 className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] text-[#5d91f7]">PortalHQ Blog</h1>
            </div>

            <div className="headerRight">
                <Button text={"Subscribe"} styles={buttonStyle}/>
            </div>
        </div>
    )
}

export default Header;