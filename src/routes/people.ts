'use strict';

import * as express from 'express';
const router = express.Router();


router.get('/',(req,res,next) => {
    res.render('index', {title: 'Route People ^_^'});
  });



export default router;
    