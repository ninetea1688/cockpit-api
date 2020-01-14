'use strict';
import  Knex = require('knex');

export class UsersLevelModels {
    //select * from user
    listall(knex: Knex) {
        return knex('pt')
        .limit(10);
    }

    listraw(knex: Knex) {
        let sql = 'select * from user_level limit 10';
        return knex.raw(sql);
    }

    add(knex: Knex, Datas: any){
        return knex('user_level')
        .insert(Datas)
    }

    del(knex: Knex, levelID: any){
        return knex('user_level')
        .where('ul_id',levelID)
        .del()
    }

    update(knex: Knex, update_id: any, update_data: any) {
        return knex('user_level')
        .where('ul_id',update_id)
        .update('ul_name',update_data)
    }

    
}