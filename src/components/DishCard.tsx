import { Dish } from "../types/types";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
type Props = {
    dish: Dish;
};

export default function DishCard(props: Props) {
    const context = useContext(CartContext);
    if (!context) throw Error("Cart context not found.");
    const { addDish } = context;

    return (
        <>
            <div className="dish-card">
                <div className="dish-card-infos">
                    <h2>{props.dish.name}</h2>
                    <p>{props.dish.description}</p>
                    <p>
                        <b>{props.dish.price.toString().replace(".", ",")} €</b>
                    </p>
                </div>
                <button className="add-dish-btn" onClick={() => addDish(props.dish)}>
                    +
                </button>
            </div>
        </>
    );
}
