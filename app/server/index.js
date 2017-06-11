const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if (err) {
        throw err;
    }

    console.warn(`Listening on ${port}`);
});
