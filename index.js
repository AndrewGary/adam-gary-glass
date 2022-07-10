const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const path = require('path');

const cors = require('cors');

connectDB();

const productRouter = require('./routers/productRouter');
const emailListRouter = require('./routers/emailListRouter');

const app = express();
app.use(cors());

app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ extended: false}))

app.use('/api/products', productRouter);
app.use('/api/emailList', emailListRouter);

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('client/build'))
// }
const root = require('path').join(__dirname, 'client', 'build');
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
})
// console.log('root: ', root);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})