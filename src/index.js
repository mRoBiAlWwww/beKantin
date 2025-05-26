const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("./generated/prisma");
const cors = require("cors");
const cloudinary = require("./utils/cloudinary");
const upload = require("./middleware/multer");

dotenv.config();
const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT;

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());

//1
app.get("/products", async (req, res) => {
    try {
        const product = await prisma.produk.findMany({
            include: {
                pesananProduk: {
                    include: {
                        pesanan: true,
                    },
                },
            },
        });

        if (!product || product.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get("/products/:id", async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await prisma.produk.findUnique({
            where: {
                id: parseInt(productId),
            },
            include: {
                pesananProduk: {
                    include: {
                        pesanan: true,
                    },
                },
            },
        });

        if (!product || product.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//2
app.delete("/products/:id", async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await prisma.produk.delete({
            where: {
                id: parseInt(productId),
            },
        });

        res.json({ message: "Berhasil hapus produk", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//3
app.put("/products/:id", upload.single("image"), async (req, res) => {
    const productId = req.params.id;
    const { nama, harga, jenis, stock } = req.body;

    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        const result = await cloudinary.uploader.upload(req.file.path);

        const product = await prisma.produk.update({
            where: { id: parseInt(productId) },
            data: {
                nama,
                harga,
                jenis,
                stock,
                gambarUrl: result.secure_url,
                penjualId: "aa",
            },
        });

        res.json({ message: "Berhasil update produk", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//4
app.post("/products", upload.single("image"), async (req, res) => {
    const { nama, harga, jenis, stock } = req.body;

    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        const result = await cloudinary.uploader.upload(req.file.path);

        const product = await prisma.produk.create({
            data: {
                nama,
                harga,
                jenis,
                stock,
                gambarUrl: result.secure_url,
                penjualId: "aa",
            },
        });

        res.json({ message: "Berhasil tambah produk", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//5
app.post("/user", async (req, res) => {
    const { id, username } = req.body;

    try {
        const existing = await prisma.pembeli.findUnique({
            where: { id },
        });
        if (existing) {
            return res.json({ message: "Profil sudah ada" }); // bisa di improve lagi
        }

        const profile = await prisma.pembeli.create({
            data: {
                id,
                username,
                role: "user",
            },
        });

        res.json(profile);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Gagal simpan profil" });
    }
});
app.post("/admin", async (req, res) => {
    const { id, username } = req.body;

    try {
        const existing = await prisma.penjual.findUnique({
            where: { id },
        });
        if (existing) {
            return res.json({ message: "Profil sudah ada" }); // bisa di improve lagi
        }

        const profile = await prisma.penjual.create({
            data: {
                id,
                username,
                role: "admin",
            },
        });

        res.json(profile);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Gagal simpan profil" });
    }
});

//6
app.post("/order", async (req, res) => {
    const { jumlahProduk, status, pembeliId, pesananProduk } = req.body;

    try {
        const product = await prisma.pesanan.create({
            data: {
                jumlahProduk,
                status,
                pembeliId,
                penjualId: "aa",
                pesananProduk: {
                    create: pesananProduk.map((p) => ({
                        jumlahProduk: p.jumlah,
                        produk: {
                            connect: {
                                id: p.produkId,
                            },
                        },
                    })),
                },
            },
        });

        res.json({ message: "Berhasil menambahkan pemesanan", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//7
app.get("/order", async (req, res) => {
    try {
        const order = await prisma.pesanan.findMany({
            where: {
                status: false,
            },
            include: {
                pesananProduk: {
                    include: {
                        produk: true,
                    },
                },
            },
        });

        if (!order || order.length === 0) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//8
app.patch("/order/:id", async (req, res) => {
    const orderId = req.params.id;
    const { status } = req.body;
    try {
        const order = await prisma.pesanan.update({
            where: {
                id: orderId,
            },
            data: {
                status,
            },
        });

        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//9
app.get("/order/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const order = await prisma.pesanan.findFirst({
            where: {
                pembeliId: userId,
                status: false,
            },
            include: {
                pesananProduk: {
                    include: {
                        produk: true,
                    },
                },
            },
        });

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
