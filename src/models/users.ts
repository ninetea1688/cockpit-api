'use strict';
import  Knex = require('knex');

export class UsersModels {
    //select * from user
    listall(knex: Knex) {
        return knex('pt')
        .limit(10);
    }

    listraw(knex: Knex) {
        let sql = 'select * from pt limit 10';
        return knex.raw(sql);
    }

    wherecondition(knex: Knex, CLevel: any) {
        return knex('user')
        .where('level',CLevel)
    }

    whereconditionRaw(knex: Knex, CLevel: any) {
        let sql = 'select * from user where level = ? ';
        return knex.raw(sql,[CLevel]);
    }

}