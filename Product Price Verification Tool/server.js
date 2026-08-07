const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const products = [
    { product_id: 1, product_name: "Laptop", product_price: 45000 },
    { product_id: 2, product_name: "Mouse", product_price: 650 },
    { product_id: 3, product_name: "Keyboard", product_price: 1200 },
    { product_id: 4, product_name: "Monitor", product_price: 8500 },
    { product_id: 5, product_name: "Printer", product_price: 5500 }
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(function(item) {
        return item.product_id === id;
    });

    res.json(product);

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});