import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt}) => {
    const {picture, name, price} = tshirt;

    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirt;