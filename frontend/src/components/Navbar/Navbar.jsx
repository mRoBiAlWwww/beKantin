import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/Storecontext";
import { useClerk, useUser, useAuth, UserButton } from "@clerk/clerk-react";
import axios from "axios";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { redirectToSignIn, redirectToSignUp } = useClerk();
  const { isSignedIn } = useAuth();
  const { user: clerkUser } = useUser(); // Rename to avoid conflict
  const { getTotalCartAmount, setUser } = useContext(StoreContext);

  const [menu, setMenu] = useState("home");
  const [role, setRole] = useState("user"); // bisa diganti admin

  useEffect(() => {
    const syncProfile = async () => {
      try {
        if (!clerkUser) return;

        const endpoint =
          role === "user"
            ? "https://cdefilkom.up.railway.app/user"
            : "https://cdefilkom.up.railway.app/admin";

        await axios.post(endpoint, {
          id: clerkUser.id,
          username: clerkUser.username,
        });

        // Simpan ke context
        setUser({
          id: clerkUser.id,
          username: clerkUser.username,
          email: clerkUser.primaryEmailAddress?.emailAddress || "",
          role,
        });
      } catch (err) {
        console.error("Gagal sinkron:", err);
      }
    };

    if (clerkUser) {
      syncProfile();
    }
  }, [isSignedIn, clerkUser]);

  const handleScroll = (id) => {
    setMenu(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="navbar">
      <img
        src={assets.logo}
        alt=""
        className="logo"
        onClick={() => {
          navigate("/");
          setMenu("home");
        }}
        style={{ cursor: "pointer" }}
      />
      <ul className="navbar-menu">
        <li onClick={() => handleScroll("navbar")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => handleScroll("food-display")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => handleScroll("app-download")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
        <li onClick={() => handleScroll("footer")} className={menu === "contact-us" ? "active" : ""}>Hubungi Kami</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <>
              <button onClick={() => redirectToSignIn({ redirectUrl: "/" })}>Masuk</button>
              <button onClick={() => redirectToSignUp({ redirectUrl: "/" })}>Daftar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
