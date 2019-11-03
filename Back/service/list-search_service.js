const request = require('request-promise');
const utils = require('../utils/utils');
const URL_SEARCH_API = 'https://api.mercadolibre.com/sites/MLA/search?q=';

module.exports = {
    getListBySearch: function (search) {
    search = URL_SEARCH_API.concat(search);
    return request(utils.createOptionForRequest(search))
        .then(function (response) {
            let res_into_json = utils.getResJsonParser(response);
            let filtered_res = utils.getFilteredResponseByFirstElements(res_into_json);
            return {
                author: {
                    name: 'federico franco',
                    lastname: 'mealla'
                },
                categories: utils.getCategories(filtered_res),
                item: utils.getItemsForList(filtered_res)
            };
        }).catch(function (err) {
            return err;
        });
    }
};



