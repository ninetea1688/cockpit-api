'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const members_1 = require("../models/members");
const membersModels = new members_1.MembersModels();
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
router.get('/show', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
router.get('/showaw', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.default = router;
//# sourceMappingURL=members.js.map