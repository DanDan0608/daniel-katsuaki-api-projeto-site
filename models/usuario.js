	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'ID_CLIENTE',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		empresa: {
			field: 'EMPRESA',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			field: 'TELEFONE',
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpj: {
			field: 'CNPJ',
			type: DataTypes.STRING,
			allowNull: false
		},
		cep: {
			field: 'CEP_EMPRESA',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'EMAIL',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'SENHA_EMPRESA',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'CLIENTES', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
