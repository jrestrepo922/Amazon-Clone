import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />
                <div>
                    <h2 className="checkout__title">Your shooping Basket</h2>
                    {/* BasketTime */}
                    {/* BasketTime */}
                    {/* BasketTime */}
                </div>
            </div>
            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
