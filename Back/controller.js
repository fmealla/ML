const express = require("express");
const search_api = require("./service/list-search_service.js");
const search_item = require("./service/item-search.service.js");

const endpoint = express();

endpoint.get("/items", (req, res) => {
    search_api.getListBySearch(req.query.q).then(function (response) {
        res.send(response);
    });
});

endpoint.get("/items/:id", (req, res) => {
    search_item.getItemById(req.params.id).then(function (response) {
        res.send(response);
    });
});

endpoint.listen(3000, () => {
    console.log('servidor levantado...');
});