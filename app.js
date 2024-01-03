const express = require('express');
const app = express();
const http = require('http').Server(app);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
