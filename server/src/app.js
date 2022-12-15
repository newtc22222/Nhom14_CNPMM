const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//const api = require('./routers/api');

const app = express();

<<<<<<< Updated upstream
app.use(cors({
    origin: 'http://localhost:5000',
}));
app.use(morgan('combined'));

const userRouter = require('./routers/user.route');
const productRouter = require('./routers/product.route');
const categoryRouter = require('./routers/category.route');

app.use(express.json());

app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/categories',categoryRouter);
// app.use(express.static(path.join(__dirname, '..', 'public')));
=======
app.use(cors());

app.use(morgan('combined'));

app.use(express.json());
>>>>>>> Stashed changes

app.use('/api/v1', api);

/**
 * Not Found
 */
<<<<<<< Updated upstream
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

module.exports = app;
=======
app.get('/*', (req, res) => {
    res.status(404).json({ error: "api not found!" });
});
>>>>>>> Stashed changes

