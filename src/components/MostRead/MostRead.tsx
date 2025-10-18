import Card from "../ui/card/Card";
import SectionHeader from "../ui/molecule/sectionHeader/SectionHeader";
import "./MostRead.scss";
import Picture from "../../assets/HeroImg.png"

const cardPosts: {picture: string; text: string; date: string}[] = [
    {
        picture: Picture, 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloremque?", 
        date: "September 24, 2025"
    },
    {
        picture: Picture, 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloremque?", 
        date: "September 24, 2025"
    },
    {
        picture: Picture, 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloremque?", 
        date: "September 24, 2025"
    },
]

const MostRead = () => {
    return (
        <div className="mostRead">
            <SectionHeader title="Most Read"/>

            <div className="mostReadCards">
                {cardPosts.map((card) => (
                    <Card 
                        date={card.date}
                        picture={card.picture}
                        text={card.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default MostRead;