import React from 'react';
import './Card.css'

const Card = props => (
    <div class="card">
        <div class="container" onClick={() => props.selectCards(props.id)}>
            <img class="card-img-top" src={props.image} alt="Card"></img>
        </div>
    </div>
)

export default Card