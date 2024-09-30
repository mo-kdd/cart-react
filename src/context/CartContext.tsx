import { createContext, useState, ReactNode } from "react";
import { Dish } from "../types/types";

type cartContextType = {
    items: Dish[];
    addDish: (item: Dish) => void;
    removeDish: (id: number) => void;
};
export const CartContext = createContext<cartContextType | undefined>(undefined);

// Provider to wrap context to the app
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<Dish[]>([]);

    /**
     *
     * @param item the dish that should be added to the cart.
     */
    function addDish(item: Dish): void {
        setItems((currentItems) => {
            const existingItem = currentItems.find((curItem) => item.id === curItem.id);
            // If item found inside cart already, update quantity
            if (existingItem) {
                return currentItems.map((curItem) =>
                    curItem.id === item.id
                        ? // curItem.quantity + item.quantity fixes state management issues
                          { ...curItem, quantity: curItem.quantity + item.quantity }
                        : curItem
                );
            } else {
                // if item is not found,add it to currentItems
                return [...currentItems, item];
            }
        });
    }

    /**
     * Removes the item from the cartItems useState
     * @param id
     */
    function removeDish(id: number): void {
        // Reduces the quantity if there are more than 1 dishes,
        // if there is a single dish, removes it entirely from array.

        setItems((currentItems) => {
            const toRemove = currentItems.find((item) => item.id === id);
            if (toRemove) {
                if (toRemove.quantity > 1) {
                    return currentItems.map((curItem) =>
                        // Reduces the quantity of the dish until 1
                        curItem.id === id ? { ...curItem, quantity: curItem.quantity - 1 } : curItem
                    );
                } else {
                    // Removing a dish with quantity == 1 removes it from the currentItems array entirely
                    return currentItems.filter((item) => item.id !== id);
                }
            }
            return currentItems;
        });
    }

    return (
        <CartContext.Provider value={{ items, addDish, removeDish }}>
            {children}
        </CartContext.Provider>
    );
};
