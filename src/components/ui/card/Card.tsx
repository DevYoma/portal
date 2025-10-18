import "./Card.scss"

type Prop = {
    picture: string; 
    text: string; 
    date: string;
}

const Card = ({picture, text, date}: Prop) => {
    return (
        <div className="card">
            <img src={picture} alt="img-text" />
            <div className="cardContent">
                <p>{text}</p>
                <span>{date}</span>
            </div>
        </div>
    )
}

export default Card;

