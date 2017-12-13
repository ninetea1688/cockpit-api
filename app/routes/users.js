'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const users_1 = require("../models/users");
const userModels = new users_1.UsersModels();
const userLevels_1 = require("../models/userLevels");
const userLevels = new userLevels_1.UsersLevelModels();
router.get('/', (req, res, next) => {
    let db = req.db;
    userModels.listall(db)
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
router.get('/where/:CLevel', (req, res, next) => {
    let db = req.db;
    let CLevel = req.params.CLevel;
    userModels.whereconditionRaw(db, CLevel)
        .then((results) => {
        res.send({ ok: true, rows: results[0] });
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
router.post('/ulevel', (req, res, next) => {
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
exports.default = router;
//# sourceMappingURL=users.js.map