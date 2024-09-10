module.exports = (sequelize, DataTypes) => {

    const materials = sequelize.define("materials", {
        materialname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        normgood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        normorder: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pki: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        account: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        datepay: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        supplier: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        datearrival: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        datevk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateotk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sertificate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateclosesert: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dop1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dop2: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        dop3: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        dop4: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        GoodId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return materials;

};