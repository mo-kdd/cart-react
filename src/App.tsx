import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    return (
        <>
            <div className="main-container">
                <Navbar />
                <Header minValue={25} stars={4.5} />
                {/* To have menu and shopping cart side by side */}
                <div className="menu-cart-div">
                    <Menu />
                    <ShoppingCart />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
