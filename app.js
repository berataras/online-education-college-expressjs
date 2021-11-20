const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const session = require('express-session');
const MongoStore = require('connect-mongo');

const indexRouter = require('./routes/index');
const courseRouter = require('./routes/course')
const userRoute = require('./routes/user')

const app = express();
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log(`server started at ${3000} port`);
})

//template engine
app.set('view engine', 'ejs');

//DB Connect
mongoose.connect('mongodb://localhost/online-education-college', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Global Variables
global.userIN = null;


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/online-education-college' })
}))

//routes
app.use('*', (req, res, next) => {
    userIN = req?.session?.userID;
    next();
})
app.use('/', indexRouter);
app.use('/courses', courseRouter)
app.use('/users', userRoute)

module.exports = app;
