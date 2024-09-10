module.exports = (sequelize, DataTypes) => {

    const Clientstester = sequelize.define("Clientstester", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Clientstester.associate = (models) => {
        Clientstester.hasMany(models.Goodstester, {
            onDelete: "cascade",
        })
    }

    return Clientstester;

};