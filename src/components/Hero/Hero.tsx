import HeroLogo from "../../assets/HeroImg.png";

const Hero = () => {
    return (
        <div className="flex flex-col gap-8 py-5 xl:flex-row xl:gap-6 xl:py-10">
            <div className="relative flex-1">
                <img src={HeroLogo} alt="hero-png" className="w-full h-auto object-cover" />
                <p className="absolute bottom-12 left-4 font-medium text-sm md:text-lg xl:text-[1.5rem] xl:bottom-20 xl:left-8 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, rerum et. Est!</p>
                <span className="absolute bottom-6 left-4 text-xs text-gray-300 md:text-sm xl:bottom-12 xl:left-8">September 25, 2025</span>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
                {/* build a card component with img and text side by side */}
                {[1,2].map((i) => (
                    <div key={i} className="flex gap-2">
                        <img 
                            src={HeroLogo} 
                            alt="hero-png" 
                            className="w-[150px] sm:w-[200px] lg:w-[300px] h-auto object-cover"
                        />
                        <div className="flex flex-col justify-center gap-2">
                            <h3 className="font-semibold text-base md:text-lg lg:text-[1.5rem]">Lorem ipsum dolor sit amet consectetur.</h3>
                            <span className="text-slate-500 text-sm md:text-sm">September 24, 2025</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero;