const express=require('express')
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const error=require('../middleware/error')
const indexRouter = require('../routes/city');


module.exports=function(app){
app.use(error)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
}