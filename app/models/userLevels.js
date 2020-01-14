'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class UsersLevelModels {
    listall(knex) {
        return knex('pt')
            .limit(10);
    }
    listraw(knex) {
        let sql = 'select * from user_level limit 10';
        return knex.raw(sql);
    }
    add(knex, Datas) {
        return knex('user_level')
            .insert(Datas);
    }
    del(knex, levelID) {
        return knex('user_level')
            .where('ul_id', levelID)
            .del();
    }
    update(knex, update_id, update_data) {
        return knex('user_level')
            .where('ul_id', update_id)
            .update('ul_name', update_data);
    }
}
exports.UsersLevelModels = UsersLevelModels;
//# sourceMappingURL=userLevels.js.map