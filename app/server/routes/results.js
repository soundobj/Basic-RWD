const mockResponse = require('../mock/mock-response');

const results = (req, res, next) => {
    res.render('results', {
        data: (mockResponse.area === req.query.search.toUpperCase()) ? mockResponse : null,
        search: req.query.search
    });
};

module.exports = results;
