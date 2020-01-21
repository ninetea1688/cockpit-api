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
    wherecid(knex, cid) {
        return knex('members')
            .where('cid', cid);
    }
    delete(knex, cid) {
        return knex('members')
            .where('cid', cid)
            .del();
    }
    update(knex, cid, telephone) {
        return knex('members')
            .where('cid', cid)
            .update('telephone', telephone);
    }
    addData(knex, Datas) {
        return knex('members')
            .insert(Datas);
    }
}
exports.MembersModels = MembersModels;
//# sourceMappingURL=members.js.map