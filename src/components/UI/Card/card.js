import React from 'react';
import './card.css';

/*
The Card component represents a reusable card container.
It is a functional component that receives props as its parameter.
The component renders a div element with the CSS class card.
The width of the card is determined by the props.width value, defaulting to '100%' if not provided.
The props.children are rendered inside the card, allowing other components or content to be nested within it.
*/

const Card = (props) => {
  return(
    <div className="card" style={{ width: props.width ? props.width: '100%' }} {...props}>
        {props.children}
    </div>
   )

 }

export default Card