import Card from "../ui/card/Card";
import "./Posts.scss";
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
        <div className="posts">
            <SectionHeader title="New Posts"/>

            <div className="postsCards">
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