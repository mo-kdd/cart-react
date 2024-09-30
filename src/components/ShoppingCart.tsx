import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Dish } from "../types/types";

export default function ShoppingCart() {
    const context = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [currency, setCurrency] = useState("");

    if (!context) {
        throw Error("Cart context could not be found.");
    }
    const { items, removeDish } = context;

    useEffect(() => {
        // Recounts total price on each {items} update => therefore uses items as dependency
        let count = 0;
        {
            items.map((item) => {
                count += item.price * item.quantity;
            });
        }
        setTotalPrice(Number(count.toFixed(2)));
    }, [items]);

    // To prevent hard coding of currency & flexibility
    useEffect(() => {
        setCurrency("€");
    }, []);

    return (
        <>
            <div className="shopping-cart-div">
                <h2>Your order</h2>
                <br></br>
                {/* Renders the items inside the context. */}
                {items.map((item: Dish, i: number) => {
                    return (
                        <div key={i} className="cart-item">
                            <div className="cart-item-infos">
                                <p>
                                    <b>{item.name}</b> x {item.quantity}
                                </p>
                                <p>
                                    {item.price.toString().replace(".", ",")} {currency}
                                </p>
                            </div>
                            <button className="remove-dish-btn" onClick={() => removeDish(item.id)}>
                                -
                            </button>
                        </div>
                    );
                })}
                {/* Rendering of total price only if cart contains items*/}
                {totalPrice !== 0 ? (
                    <>
                        <hr></hr>
                        <div className="total-price-div">
                            <b>Total price:</b> {totalPrice.toString().replace(".", ",")} {currency}
                        </div>
                    </>
                ) : (
                    <>
                        <p className="emptycart-msg">Your cart is empty</p>
                    </>
                )}
            </div>
        </>
    );
}
