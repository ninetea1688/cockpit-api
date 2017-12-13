'use strict';

import * as express from 'express';
const router = express.Router();


import { UsersLevelModels } from '../models/userLevels';
const userLevels = new UsersLevelModels();


router.get('/', (req, res, next) => {
    let db = req.db;

    userLevels.listall(db)
        .then((results: any) => {
            res.send({ ok: true, rows: results });
        })
        .catch(error => {
            res.send({ ok: false, error: error })
        })
        .finally(() => {
            db.destroy();
        })
});


router.post('/', (req, res, next) => {
    let db = req.db;
    let var_ul_id = req.body.ul_id;
    let var_ul_name = req.body.ul_name;

    let datas: any = {
        ul_id: var_ul_id,
        ul_name: var_ul_name
    }
    userLevels.add(db, datas)
        .then((results: any) => {
            res.send({ ok: true });
        })
        .catch(error => {
            res.send({ ok: false, error: error })
        })
        .finally(() => {
            db.destroy();
        })
});

router.delete('/:levelID', (req, res, next) => {
    let db = req.db;
    let levelID = req.params.levelID;

    userLevels.del(db,levelID)
        .then((results: any) => {
            res.send({ ok: true });
        })
        .catch(error => {
            res.send({ ok: false, error: error })
        })
        .finally(() => {
            db.destroy();
        })
});

router.put('/', (req, res, next) => {
    let db = req.db;
    let update_id = req.body.update_id;
    let update_data = req.body.update_data;

    userLevels.update(db,update_id, update_data)
        .then((results: any) => {
            res.send({ ok: true });
        })
        .catch(error => {
            res.send({ ok: false, error: error })
        })
        .finally(() => {
            db.destroy();
        })
});

export default router;