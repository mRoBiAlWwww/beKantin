import React, { useEffect, useState, useContext } from "react";
import { StoreContext } from "../../context/Storecontext";

const Orders = () => {
  const { user } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !user.id) {
        console.warn("⛔ Tidak ada user.id");
        return;
      }

      console.log("🔍 Mengambil pesanan untuk user ID:", user.id);

      try {
        const res = await fetch(`https://cdefilkom.up.railway.app/order/${user.id}`);

        if (!res.ok) {
          const err = await res.json();
          console.error("❌ Gagal ambil pesanan:", err);
          return;
        }

        const data = await res.json();
        console.log("📦 Data pesanan dari backend:", data);

        if (Array.isArray(data)) {
          setOrders(data);
        } else if (data && data.id) {
          setOrders([data]); // Bungkus jadi array
        } else {
          setOrders([]);
        }

      } catch (error) {
        console.error("❌ Fetch orders error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user || !user.id) {
    return <p>⚠️ Silakan login untuk melihat pesanan Anda.</p>;
  }

  return (
    <div className="orders-page">
      <h2>Status Pesanan Kamu</h2>
      {loading ? (
        <p>Loading...</p>
      ) : orders.length === 0 ? (
        <p>Belum ada pesanan.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} style={{ marginBottom: "1rem" }}>
              <p><strong>ID Pesanan:</strong> {order.id}</p>
              <p><strong>Status:</strong> {order.status ? "Selesai" : "Belum Selesai"}</p>
              <p><strong>Jumlah Produk:</strong> {order.jumlahProduk}</p>
              <p><strong>Produk:</strong>{" "}
                {Array.isArray(order.pesananProduk)
                  ? order.pesananProduk.map(p => p?.produk?.nama).join(", ")
                  : "Tidak ada produk"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
