import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
        useContext(StoreContext);
    const { isSignedIn, isLoaded } = useAuth();
    const [promo, setPromo] = useState("");
    const navigate = useNavigate();

    const handlePesanan = () => {
        if (isSignedIn) {
            navigate("/order");
        } else {
            toast.warning("Anda harus login terlebih dahulu !!!");
        }
    };
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item._id]}</p>{" "}
                                    {/* Jumlah kuantitas yang benar */}
                                    <p>{item.price * cartItems[item._id]}</p>
                                    <p
                                        onClick={() => removeFromCart(item._id)}
                                        className="cross"
                                    >
                                        x
                                    </p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{getTotalCartAmount() === 0 ? 0 : 10000}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>
                                {getTotalCartAmount() === 0
                                    ? 0
                                    : getTotalCartAmount() + 10000}
                            </b>
                        </div>
                    </div>
                    <button onClick={handlePesanan}>
                        Lanjutkan ke Pembayaran
                    </button>
                    
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>Jika Anda memiliki kode promo, masukkan di sini.</p>
                        <div className="cart-promocode-input">
                            <input
                                type="text"
                                placeholder="promocode"
                                name="promo"
                                value={promo}
                                onChange={(e) => setPromo(e.target.value)}
                            />
                            <button>Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
