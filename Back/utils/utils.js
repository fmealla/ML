module.exports =  {

    getResJsonParser: function getResJsonParser(body) {
        return JSON.parse(JSON.stringify(body))
    },

    getFilteredResponseByFirstElements: function getFilteredResponseByFirstElements(res_into_json){
        return res_into_json.results.slice(0, 4)
    },

    getCategories: function getCategories(filtered_res){
        return filtered_res.map((item) => item.category_id);
    },

    createOptionForRequest: function createOptionForRequest(search) {
        return option = {
            uri: search,
            json: true
        };
    },

    getItemsForList: function getItems(filtered_res) {
        return filtered_res.map(obj => ({
                id: obj.id,
                title: obj.title,
                price: {
                    currency: obj.currency_id,
                    amount: getAmount(obj),
                    decimals: getDecimals(obj)
                },
                picture: obj.thumbnail,
                condition: obj.condition,
                free_shipping: obj.shipping.free_shipping
            }
        ));
    },

    getAmount: function getAmount(obj) {
        return Math.trunc(obj.price)
    },

    getDecimals: function getDecimals(obj) {
        let decimalOnly = 0;
        if ( obj.price.toString().indexOf('.') !== -1 ) {
            decimalOnly = parseFloat((obj.price % 1).toString().split('.')[1]);
        }
        return decimalOnly;
    }

};





