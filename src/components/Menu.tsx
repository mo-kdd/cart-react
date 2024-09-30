import { categories } from "../mockData/categories";
import Category from "./Category";

export default function Menu() {
    return (
        <div className="menu-div">
            {/* Map dishes depending on their category */}
            {categories.map((category, i) => {
                return <Category category={category.name} id={category.id} key={i} />;
            })}
        </div>
    );
}
