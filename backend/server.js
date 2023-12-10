require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");


const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log(`db connected... }`);
  })
  .catch((err) => console.log(err));
    
const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes)

app.use('/api/auth', (req, res) => {
    res.send('register and login')
})

app.use('/api/expense', expenseRoutes)

app.use('/', (req, res) => {
    res.send("hello world")
})
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})