import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/Storecontext";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    cartItems,
    resetCart,
    user,
  } = useContext(StoreContext);

  const [showQRIS, setShowQRIS] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const navigate = useNavigate();

  const generateQRCode = () => {
    const dataString = JSON.stringify(cartItems);
    QRCode.toDataURL(
      dataString,
      { width: 300, margin: 2, errorCorrectionLevel: "H" },
      (err, url) => {
        if (err) return console.error(err);
        setQrcode(url);
      }
    );
  };

  const handlePaymentProcess = (e) => {
    e.preventDefault();
    setShowQRIS(true);
    generateQRCode();
  };

const handlePaymentDone = async (e) => {
  e.preventDefault();

  if (!user || !user.id) {
    toast.error("Kamu harus login untuk melanjutkan.");
    return;
  }

  const produkArray = Object.entries(cartItems)
  .filter(([id, qty]) => qty > 0 && !isNaN(Number(id)))
  .map(([id, qty]) => ({
    produkId: Number(id),
    jumlah: qty
  }));


const totalJumlah = produkArray.reduce((sum, item) => sum + item.jumlah, 0);

const payload = {
  jumlahProduk: totalJumlah,
  status: false,
  pembeliId: user.id,
  pesananProduk: produkArray // ← langsung array
};


  console.log("Payload yang dikirim:", JSON.stringify(payload, null, 2));
  console.log("Full payload:", JSON.stringify(payload, null, 2));
console.log("typeof pesananProduk:", typeof payload.pesananProduk);
console.log("Is pesananProduk an array?", Array.isArray(payload.pesananProduk));

  try {
    const res = await fetch("https://cdefilkom.up.railway.app/order/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      toast.success("Pembayaran berhasil & pesanan disimpan!");
      resetCart();
      navigate("/orders");
    } else {
      const err = await res.json();
      console.error("Gagal menyimpan:", err);
      toast.error("Gagal menyimpan pesanan.");
    }
  } catch (err) {
    console.error("Order error:", err);
    toast.error("Terjadi kesalahan saat menyimpan pesanan.");
  }
};


  return (
    <>
      <form onSubmit={handlePaymentProcess} className="place-order">
        <div className="place-order-left">
          <p className="title">Informasi Pemesanan</p>
          {/* Tambahkan form input tambahan di sini jika diperlukan */}
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Total Keranjang</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Ongkir</p>
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
            <button type="submit">Proses Pembayaran</button>
          </div>
        </div>
      </form>

      {qrcode && showQRIS && (
        <div className="qris-modal">
          <div className="qris-content">
            <img src={qrcode} alt="QR Code" />
            <p>Scan QRIS untuk membayar</p>
            <a href={qrcode} download="qrcode.png">Download QR</a>
            <button onClick={() => setShowQRIS(false)}>&times;</button>
            <button onClick={handlePaymentDone}>Konfirmasi Pembayaran</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceOrder;
