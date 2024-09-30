import { useEffect, useState } from "react";
import { dishes } from "../mockData/dishes";
import { Dish } from "../types/types";
import DishCard from "./DishCard";

type Props = {
    category: string;
    id: number;
};

export default function Category(props: Props) {
    const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);

    /**
     * Get the dishes under the current category that is fed into the props.
     * @param id (the category id of the category fed in props)
     */
    function getDishesPerCategory(id: number): void {
        const dishesPerCategory: Dish[] = [];
        // Get only the dishes that have category.id == id. In other words, dishes that belong to this category component
        dishes.map((dish) => {
            if (dish.category == id) {
                dishesPerCategory.push(dish);
            }
        });
        setFilteredDishes(dishesPerCategory);
    }

    useEffect(() => {
        getDishesPerCategory(props.id);
    }, [props.id]);

    return (
        <div className="category-div">
            <h2>{props.category}</h2>
            {filteredDishes.map((dish, index) => {
                return <DishCard dish={dish} key={index} />;
            })}
        </div>
    );
}
