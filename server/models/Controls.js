module.exports = (sequelize, DataTypes) => {

    const Controls = sequelize.define("Controls", {
        controltype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        directionnum: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        directionlink: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        datedir: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        opinionnum: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateop: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        opinionlink: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        GoodId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Controls;

};