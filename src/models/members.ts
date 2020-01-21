'use strict';
import  Knex = require('knex');

export class MembersModels {
    //Query Builder
    listall(knex: Knex) {
        return knex('members');
    }


    //Raw Query
    listraw(knex: Knex) {
        let sql = 'select * from members';
        return knex.raw(sql);
    }


}