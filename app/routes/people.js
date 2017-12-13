'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Route People ^_^' });
});
exports.default = router;
//# sourceMappingURL=people.js.map