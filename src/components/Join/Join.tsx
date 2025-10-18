import Button from "../ui/button/Button"
import Picture from "../../assets/HeroImg.png";

const Join = () => {
    return (
        <div className="relative mb-[50px]">
            <img 
                src={Picture} 
                alt="join-picture" 
                className="hidden lg:block absolute w-[500px] left-[75px] top-[50px]"
            />
            <div className="ml-auto w-full lg:w-[75%] bg-[#5d91f7]">
                <div className="w-[90%] mx-auto lg:ml-auto lg:mr-0 py-10 lg:w-1/2 lg:py-[60px]">
                    <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-white leading-normal">Join Our Learning Community</h1>
                    <p className="text-white my-4 w-full lg:w-[80%]">Subscribe today to stay connected with School activities, academic tips and improving grades.</p>

                    <div className="my-5">
                        <input 
                            type="text" 
                            placeholder="Enter your email address"
                            className="w-full lg:w-[80%] rounded-full p-2.5 outline-none"
                        />
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