import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('user',{
    nama: DataTypes.STRING,
    hobi: DataTypes.STRING,
    sekolah: DataTypes.STRING,
    createdAt: DataTypes.DATE,

},{
    freezeTableName: true
});

export default User;

(async()=>{
    await db.sync();
})