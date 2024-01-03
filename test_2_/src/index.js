const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const setupSocket = require('./socket');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

const server = http.createServer(app);
const io = setupSocket(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));