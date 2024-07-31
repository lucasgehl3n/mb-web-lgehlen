const express = require('express');
const cors = require('cors');
const path = require('path');
const RegistrationController = require('./controllers/registrationController');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use(cors());
app.use(express.json());

app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.post('/registration', (req, res) => RegistrationController.register(req, res));

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
