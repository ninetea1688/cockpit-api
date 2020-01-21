'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const members_1 = require("../models/members");
const membersModels = new members_1.MembersModels();
const pttypes_1 = require("../models/pttypes");
const pttypesModels = new pttypes_1.PttypesModels();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Member ^_^' });
});
router.get('/all', (req, res, next) => {
    let db = req.db;
    membersModels.listall(db)
        .then((results) => {
        res.send({ ok: true, rows: results });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    });
});
router.get('/raw', (req, res, next) => {
    let db = req.db;
    membersModels.listraw(db)
        .then((results) => {
        res.send({ ok: true, rows: results[0] });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    });
});
router.get('/show', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        let rows = yield membersModels.listall(db);
        res.send({ ok: true, rows: rows });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }
}));
router.get('/showaw', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        let rows = yield membersModels.listall(db);
        res.send({ ok: true, rows: rows });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }
}));
router.post('/showaw', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        let rows = yield pttypesModels.listall(db);
        res.send({ ok: true, rows: rows });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }
}));
router.get('/showcid/:cid', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let cid = req.params.cid;
    try {
        let rows = yield membersModels.wherecid(db, cid);
        res.send({ ok: true, rows: rows });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }
}));
router.delete('/delete/:cid', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let cid = req.params.cid;
    try {
        let rows = yield membersModels.delete(db, cid);
        res.send({ ok: true, rows: rows });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }
}));
router.put('/update/:cid/:telephone', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let cid = req.params.cid;
    let telephone = req.params.telephone;
    try {
        let rows = yield membersModels.update(db, cid, telephone);
        res.send({ ok: true, rows: rows });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }
}));
router.post('/add', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let var_cid = req.body.cid;
    let var_firstname = req.body.firstname;
    let var_lastname = req.body.lastname;
    let var_telephone = req.body.telephone;
    let Datas = {
        cid: var_cid,
        firstname: var_firstname,
        lastname: var_lastname,
        telephone: var_telephone
    };
    try {
        let rows = yield membersModels.addData(db, Datas);
        res.send({ ok: true, rows: rows });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }
}));
exports.default = router;
//# sourceMappingURL=members.js.map