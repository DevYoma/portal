import Card from "../ui/card/Card";
import Picture from "../../assets/HeroImg.png";
import SectionHeader from "../ui/molecule/sectionHeader/SectionHeader";

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
    }
]

const Posts = () => {
   
    return(
        <div className="mb-8">
            <SectionHeader title="New Posts"/>

            <div className="mt-8 flex flex-wrap justify-between gap-6">
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

export default Posts;