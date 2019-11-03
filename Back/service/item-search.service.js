const request = require('request-promise');
const utils = require('../utils/utils');
const URL_ITEM_BY_ID ="https://api.mercadolibre.com/items/";
let context = {};

module.exports = {
    getItemById: function (search) {

        search = URL_ITEM_BY_ID.concat(search);

        let first_request = request(utils.createOptionForRequest(search))
            .then(response => {
                let res_into_json = utils.getResJsonParser(response);

                context.author = {};
                context.author.name = "federico franco";
                context.author.lastname = "mealla";
                context.item = {};
                context.item.id = res_into_json.id;
                context.item.title = res_into_json.title;
                context.item.price = {};
                context.item.price.currency = res_into_json.currency_id;
                context.item.price.amount = utils.getAmount(res_into_json);
                context.item.price.decimals = utils.getDecimals(res_into_json);
                context.picture = res_into_json.thumbnail;
                context.condition  = res_into_json.condition;
                context.free_shipping = res_into_json.shipping.free_shipping;
                context.sold_quantity = res_into_json.sold_quantity;
            })
            .catch(error => {
                return error;
            });

        let second_request = request(utils.createOptionForRequest(search.concat("/descriptions")))
            .then(response => {
                let res_into_json = utils.getResJsonParser(response);
                context.description = res_into_json[0].plain_text
            }).catch( error => {
                return error;
            });

           return Promise.all([first_request, second_request]).then(values => {
                return context;
            }).catch(reason => {
                console.log(reason)
            });
    }
};


