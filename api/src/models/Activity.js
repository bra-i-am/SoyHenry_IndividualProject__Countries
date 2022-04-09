const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"activity",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				unique: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			expertise: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true,
					min: 1,
					max: 5,
				},
			},
			duration: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true,
				},
			},
			season: {
				type: DataTypes.STRING,
				validate: {
					customValidator: (value) => {
						const enums = ["Summer", "Autumn", "Winter", "Spring", "Any"];
						if (!enums.includes(value)) {
							throw new Error("Invalid season");
						}
					},
				},
			},
		},
		{
			timestamps: false,
		},
	);
};
