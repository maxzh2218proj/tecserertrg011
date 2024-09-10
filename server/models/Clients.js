module.exports = (sequelize, DataTypes) => {

    const Clients = sequelize.define("Clients", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Clients.associate = (models) => {
        Clients.hasMany(models.Goods, {
            onDelete: "cascade",
        })
    }

    return Clients;

};