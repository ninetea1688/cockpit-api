'use strict';
//เพิ่มเข้ามา
require('dotenv').config();
import Knex = require('knex');
import { MySqlConnectionConfig } from 'knex';
 
import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import * as cors from 'cors';

import index from './routes/index';
//import ไฟล์ people ใน folder route/people.ts
import people from './routes/people';
import users from './routes/users';
import userlevel from './routes/userlevel';
import members from './routes/members';

import { userInfo } from 'os';

const app: express.Express = express();

//view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

//ประกาศใช้ cors
app.use(cors());

//สร้างตัวแปร เก็บ connection ของ mysql
let connection: MySqlConnectionConfig = {
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true
}

//ประกาศเสร็จแล้ว มาเรียกใช้ connection
app.use((req, res, next) => {
  req.db = Knex({
    client: 'mysql',
    connection: connection,
    pool: {
      min: 0,
      max: 7,
      afterCreate: (conn, done) => {
        conn.query('SET NAMES utf8', (err) => {
          done(err,conn);
        });
      } 
    },
    debug: true,
    acquireConnectionTimeout: 5000
  });

  next();
});




app.use('/',index);
//import เข้ามาเสร็จแล้ว ประกาศใช้
app.use('/people',people);
app.use('/users', users);
app.use('/userlevel',userlevel);
app.use('/members', members);

//catch 404 and forward to error handler
app.use((req,res,next) => {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

//error handlers

//development error handler
//will print stacktrace
if(process.env.NODE_ENV === 'development') {
  app.use((err: Error,req,res,next) => {
    res.status(err['status'] || 500);
    res.render('error',{
      title: 'error',
      message: err.message,
      error: err
    });
  });    
}

//production error handler
// no stacktrace leaked to user
app.use((err: Error,req,res,next) => {
  res.status(err['status'] || 500);
  res.render('error',{
    title: 'error',
    message: err.message,
    error: {}
  });
});

export default app;
