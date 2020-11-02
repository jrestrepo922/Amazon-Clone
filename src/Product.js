import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';

// instead of passing props we are deconstructing our object
function Product({id, title, image, price, rating}) {
    // creates an empty array with a length of rating and than we fill the emtpy elements with undefined
    // creates a new array with JSX elements which React can render. The Key value is require for effiecient Virtual and regular DOM comparison. 
    // removes the error from react
    const ratingStars = Array(rating).fill().map((_, i) => {
        return <p key={i}><StarIcon/></p>
    })
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {ratingStars}
                </div>
            </div>
            <img
            src={image}
            alt=""
            />
            <button>Add To Basket</button> 
        </div>
    )
}

export default Product
