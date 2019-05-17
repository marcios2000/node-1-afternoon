const express = require("express");
const app = express();
const products = require("../products.json")
const getProducts = require("./getProducts")



const port = 5551

app.listen({port}, () => {
    console.log(`Server Listening on port: ${port}`)
})


app.get("/api/products", getProducts);
app.get("/api/products/:id", getProducts)

