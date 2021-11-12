import { PlayCard } from '../types/types'
import './Card.css'

const Card : React.FC<PlayCard> = (props: PlayCard) : React.ReactElement=> (
    <div onClick={props.onClick} className="card">
        <div className="container" >
            <img className="card-img-top" src={props.image} alt="Card"></img>
        </div>
    </div>
)

export default Card