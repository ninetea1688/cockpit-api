'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class PttypesModels {
    listall(knex) {
        return knex('pttype');
    }
    listraw(knex) {
        let sql = 'select * from pttype';
        return knex.raw(sql);
    }
    wherecid(knex, pttype) {
        return knex('pttype')
            .where('pttype', pttype);
    }
}
exports.PttypesModels = PttypesModels;
//# sourceMappingURL=pttypes.js.map