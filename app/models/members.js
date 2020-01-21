'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class MembersModels {
    listall(knex) {
        return knex('members');
    }
    listraw(knex) {
        let sql = 'select * from members';
        return knex.raw(sql);
    }
}
exports.MembersModels = MembersModels;
//# sourceMappingURL=members.js.map