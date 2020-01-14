'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class UsersModels {
    listall(knex) {
        return knex('pt')
            .limit(10);
    }
    listraw(knex) {
        let sql = 'select * from pt limit 10';
        return knex.raw(sql);
    }
    wherecondition(knex, CLevel) {
        return knex('user')
            .where('level', CLevel);
    }
    whereconditionRaw(knex, CLevel) {
        let sql = 'select * from user where level = ? ';
        return knex.raw(sql, [CLevel]);
    }
}
exports.UsersModels = UsersModels;
//# sourceMappingURL=users.js.map