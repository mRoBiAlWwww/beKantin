import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const Loginpopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? (
                        <></>
                    ) : (
                        <input type="text" placeholder="Nama Anda" required />
                    )}
                    <input type="email" placeholder="Email Anda" required />
                    <input type="password" placeholder="Kata Sandi" required />
                </div>
                <button>
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>
                        Dengan melanjutkan, saya setuju dengan syarat penggunaan
                        & kebijakan privasi.
                    </p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Buat akun baru?{" "}
                        <span onClick={() => setCurrState("Sign Up")}>
                            Klik disini
                        </span>{" "}
                    </p>
                ) : (
                    <p>
                        Sudah mempunyai akun?{" "}
                        <span onClick={() => setCurrState("Login")}>
                            Masuk disini
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default Loginpopup;
