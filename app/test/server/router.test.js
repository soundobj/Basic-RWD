const test = require('tap').test;
const request = require('supertest');
const app = require('../../server/app');

test('Results page is accessible', (t) => {
    request(app)
        .get('/results')
        .end((err, res) => {
            t.same(res.status, 200);
            t.error(err, 'no error');
            t.end();
        });
});

test('Return 404 for unsupported route', (t) => {
    request(app)
        .get('/unsupported')
        .end((err, res) => {
            t.same(res.status, 404);
            t.end();
        });
});
