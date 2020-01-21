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

    // ค้นหาแบบมีเงื่อนไข
    // select * from members where cid = ?
    wherecid(knex: Knex, cid: any) {
        return knex('members')
        .where('cid', cid)
    }

    // การลบข้อมูลแบบมีเงื่อนไข
    delete(knex: Knex, cid: any) {
        return knex('members')
        .where('cid', cid)
        .del()
    }


    // การ Update ข้อมูลแบบมีเงื่อนไข
    // ถ้าเป็นคำสั่ง SQL คือ 
    // update members set telephone = ? where cid = ?
    update(knex: Knex, cid: any, telephone: any) {
        return knex('members')
        .where('cid', cid)
        .update('telephone', telephone)
    }


    // เพิ่มข้อมูล
    addData(knex: Knex, Datas: any) {
        return knex('members')
        .insert(Datas)
    }
}