const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"country",
		{
			id: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				primaryKey: true,
				validate: {
					isAlpha: true,
					len: [3],
				},
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			flag: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isUrl: true,
				},
			},
			region: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isAlpha: true,
				},
			},
			// capital: {
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
			// subregion: {
			// 	type: DataTypes.STRING,
			// },
			area: {
				type: DataTypes.INTEGER,
			},
			population: {
				type: DataTypes.INTEGER,
			},
		},
		{
			timestamps: false,
		},
	);
};
