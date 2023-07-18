const Sequalize=require('sequelize');

const sequelize=new  Sequalize('node-complete','root','Kmohan@180',{
    dialect:'mysql',
    host:'localhost'
});

module.exports= sequelize;