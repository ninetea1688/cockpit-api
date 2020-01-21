'use strict';

import * as express from 'express';
const router = express.Router();

import { MembersModels } from '../models/members';
const membersModels = new MembersModels();

/* GET home page. */
router.get('/',(req,res,next) => {
  res.render('index', {title: 'Member ^_^'});
});

router.get('/all',(req,res,next) => {
  let db = req.db;

  membersModels.listall(db)
  .then((results: any) => {
      res.send({ok: true, rows: results});
  })
  .catch(error => {
      res.send({ok : false, error: error })
  })

});


router.get('/raw',(req,res,next) => {
    let db = req.db;

  membersModels.listraw(db)
  .then((results: any) => {
      res.send({ok: true, rows: results[0]});
  })
  .catch(error => {
      res.send({ok : false, error: error })
  })

});


router.get('/show', async(req, res, next) => {
  let db = req.db;

  try {
    let rows = await membersModels.listall(db);
    res.send({ ok: true, rows: rows });
  } catch (error) {
    res.send({ ok: false, error: error.message });
  } finally {
    db.destroy();
  }
});

router.get('/showaw', async(req,res,next) => {
  let db = req.db;

  try {
    let rows = await membersModels.listall(db);
    res.send({ok : true, rows: rows});
  } catch (error) {
    res.send({ok : false, error : error.message}) ;
  } finally {
    db.destroy();
  }

});

export default router;