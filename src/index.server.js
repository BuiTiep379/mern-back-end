const express = require('express')
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')
// router 
const userRouter = require('./routers/auth');
const adminRouer = require('./routers/admin/auth');
const categoryRouter = require('./routers/categories');
const productRouter = require('./routers/product');
const cartRouter = require('./routers/cart');
const initialDataRouter = require('./routers/admin/initialData');

// connect 
mongoose.connect('mongodb://localhost:27017/mern-project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => {
    console.log('Database connect successfully!!!');
}).catch(() => {
    console.log('Database connect failure!!!');
});


env.config();

//
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use('/api', initialDataRouter);
app.use('/api', productRouter);
app.use('/api', cartRouter);
app.use('/api', categoryRouter);
app.use('/api', userRouter);
app.use('/api', adminRouer);

app.listen(process.env.PORT, () => {
    console.log(`App running on http://localhost:${process.env.PORT}`)
});