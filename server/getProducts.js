const products = require('../products.json')


// const getProducts = (request, response) =>{

//     const item = products.find(value => value.id === +request.params.id);
//     if (!item) {
//         return response.status(500).send("item not in list")
//     }
//     response.status(200).send(item)
// }





const getProducts = (request, response) => {
    if(request.query.price) {
        const items = products.filter(val => val.price <= +request.query.price)
        return response.status(200).send(items);

    }
    response.status(200).send(products)
}

module.exports = getProducts;