'use strict';

import * as express from 'express';
const router = express.Router();

import { UsersModels } from '../models/users';
const userModels = new UsersModels();

import { UsersLevelModels } from '../models/userLevels';
const userLevels = new UsersLevelModels();


router.get('/',(req,res,next) => {
  let db = req.db;

  userModels.listall(db)
  .then((results: any) => {
      res.send({ok: true, rows: results});
  })
  .catch(error => {
      res.send({ok : false, error: error })
  })
  .finally(() => {
      db.destroy();
  })
});

router.get('/where/:CLevel',(req,res,next) => {
    let db = req.db;
    //get
    let CLevel = req.params.CLevel;
    // //post
    // let CLevel = req.body.Clevel;
  
    userModels.whereconditionRaw(db,CLevel)
    .then((results: any) => {
        res.send({ok: true, rows: results[0]});
    })
    .catch(error => {
        res.send({ok : false, error: error })
    })
    .finally(() => {
        db.destroy();
    })
  });

router.post('/',(req,res,next) => {
    let db = req.db;
  
    userLevels.listall(db)
    .then((results: any) => {
        res.send({ok: true, rows: results});
    })
    .catch(error => {
        res.send({ok : false, error: error })
    })
    .finally(() => {
        db.destroy();
    })
  });


  router.post('/ulevel',(req,res,next) => {
    let db = req.db;
    let var_ul_id = req.body.ul_id;
    let var_ul_name = req.body.ul_name;

    let datas: any = {
        ul_id : var_ul_id,
        ul_name : var_ul_name
    }
    userLevels.add(db,datas)
    .then((results: any) => {
        res.send({ok: true});
    })
    .catch(error => {
        res.send({ok : false, error: error })
    })
    .finally(() => {
        db.destroy();
    })
  });

export default router;