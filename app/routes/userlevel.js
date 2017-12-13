'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const userLevels_1 = require("../models/userLevels");
const userLevels = new userLevels_1.UsersLevelModels();
router.get('/', (req, res, next) => {
    let db = req.db;
    userLevels.listall(db)
        .then((results) => {
        res.send({ ok: true, rows: results });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
router.post('/', (req, res, next) => {
    let db = req.db;
    let var_ul_id = req.body.ul_id;
    let var_ul_name = req.body.ul_name;
    let datas = {
        ul_id: var_ul_id,
        ul_name: var_ul_name
    };
    userLevels.add(db, datas)
        .then((results) => {
        res.send({ ok: true });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
router.delete('/:levelID', (req, res, next) => {
    let db = req.db;
    let levelID = req.params.levelID;
    userLevels.del(db, levelID)
        .then((results) => {
        res.send({ ok: true });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
router.put('/', (req, res, next) => {
    let db = req.db;
    let update_id = req.body.update_id;
    let update_data = req.body.update_data;
    userLevels.update(db, update_id, update_data)
        .then((results) => {
        res.send({ ok: true });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
exports.default = router;
//# sourceMappingURL=userlevel.js.map