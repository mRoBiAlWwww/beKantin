import React, { useState } from 'react';
import './Add.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Add = () => {
  const url = "https://cdefilkom.up.railway.app";

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    nama: "",
    harga: "",
    jenis: "Makanan",
    stock: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Form disubmit");

    const formData = new FormData();
    formData.append("nama", data.nama);
    formData.append("harga", Number(data.harga));
    formData.append("jenis", data.jenis);
    formData.append("stock", Number(data.stock));
    formData.append("image", image); 

    try {
      const response = await axios.post(`${url}/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log("Response dari server:", response);
      toast.success("Produk berhasil ditambahkan!");

      // Reset form
      setData({
        nama: "",
        harga: "",
        jenis: "Makanan",
        stock: ""
      });
      setImage(null);

    } catch (error) {
      console.error("Gagal menambahkan:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
      } else {
        console.log("Error:", error.message);
      }

      toast.error("Gagal menambahkan produk!");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        
        {/* Upload Gambar */}
        <div className="add-img-upload flex-col">
          <p>Upload Gambar</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Preview"
            />
          </label>
          <input
            type="file"
            id="image"
            name="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Nama Produk */}
        <div className="add-product-name flex-col">
          <p>Nama Produk</p>
          <input
            type="text"
            name="nama"
            value={data.nama}
            onChange={onChangeHandler}
            placeholder="Tulis nama produk"
            required
          />
        </div>

        {/* Jenis Produk */}
        <div className="add-category flex-col">
          <p>Jenis Produk</p>
          <select name="jenis" value={data.jenis} onChange={onChangeHandler}>
            <option value="Makanan">Makanan</option>
            <option value="Minuman">Minuman</option>
            <option value="Snack">Snack</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        {/* Harga Produk */}
        <div className="add-price flex-col">
          <p>Harga Produk</p>
          <input
            type="number"
            name="harga"
            value={data.harga}
            onChange={onChangeHandler}
            placeholder="10000"
            required
          />
        </div>

        {/* Stok Produk */}
        <div className="add-stock flex-col">
          <p>Stok Produk</p>
          <input
            type="number"
            name="stock"
            value={data.stock}
            onChange={onChangeHandler}
            placeholder="10"
            required
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className="add-btn"
          onClick={() => console.log("Tombol diklik")}
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default Add;
