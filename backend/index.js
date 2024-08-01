const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet'); 
const registrationRoutes = require('./routes/registrationRoutes'); 
const errorHandler = require('./middlewares/errorHandler'); 

const app = express();
const port = 3000; 

// Configura o middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

//Static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

//Routes
app.use('/', registrationRoutes);

//Middlewares
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
