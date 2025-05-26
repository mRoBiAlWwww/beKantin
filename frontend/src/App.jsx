import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer } from "react-toastify";
import Orders from "./pages/Orders/Orders";

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}

            <div className="app">
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceOrder />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default App;
