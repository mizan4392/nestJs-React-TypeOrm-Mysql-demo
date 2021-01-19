import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const TypeormConfig:TypeOrmModuleOptions = {
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root', //use your local MySQL username
    password:'root', //use your local MySQL password
    database:'friends',
    entities:[__dirname + 'dist/../**/*.entity.js'],
    synchronize:true,
};
