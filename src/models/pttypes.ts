'use strict';
import  Knex = require('knex');

export class PttypesModels {
    //Query Builder
    listall(knex: Knex) {
        return knex('pttype');
    }


    //Raw Query
    listraw(knex: Knex) {
        let sql = 'select * from pttype';
        return knex.raw(sql);
    }

    //search with condition
    // select * from members where cid = ?
    wherecid(knex: Knex, pttype: any) {
        return knex('pttype')
        .where('pttype', pttype)
    }
}