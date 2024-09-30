import { Dish } from "../types/types";
// --- Alternative approach would be to create a mock API that returns a new promise with data ---
export const dishes: Dish[] = [
    // Mock data
    {
        id: 0,
        name: "Small Pizza",
        description: "A small pizza",
        price: 4,
        category: 0,
        info: ["lactose"],
        quantity: 1,
    },
    {
        id: 1,
        name: "Medium Pizza",
        description: "A medium pizza",
        price: 6.5,
        category: 0,
        info: ["lactose"],
        quantity: 1,
    },
    {
        id: 2,
        name: "Steak",
        description: "Beefsteak",
        price: 14.99,
        category: 0,
        info: ["meat"],
        quantity: 1,
    },
    // Dessert:
    {
        id: 3,
        name: "Tiramisu",
        description: "A freshly made tiramisu slice",
        price: 2,
        category: 1,
        info: ["lactose", "gluten"],
        quantity: 1,
    },
    {
        id: 4,
        name: "Cake",
        description: "Chocolate cake",
        price: 6,
        category: 1,
        info: ["lactose", "gluten"],
        quantity: 1,
    },
    // Drinks
    {
        id: 5,
        name: "Water 0.5l",
        description: "Sparkling water",
        price: 2,
        category: 2,
        info: [],
        quantity: 1,
    },
    {
        id: 6,
        name: "Orange juice 0.5l",
        description: "Made naturally. Might contain orange pulp pieces.",
        price: 3,
        category: 2,
        info: [],
        quantity: 1,
    },
    {
        id: 7,
        name: "Soda Zero 0.33l",
        description: "Lemon flavoured soda. No sugar included",
        price: 2.5,
        category: 2,
        info: [],
        quantity: 1,
    },
    {
        id: 7,
        name: "Energy drink 0.33l",
        description: "contains coffeine",
        price: 2.5,
        category: 2,
        info: [],
        quantity: 1,
    },
];
