module.exports = (sequelize, DataTypes) => {

    const materialstester = sequelize.define("materialstester", {
        materialname: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        code: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        mass: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        normgood: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        normorder: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        pki: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        account: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        datepay: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        supplier: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        datearrival: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        datevk: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dateotk: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        sertificate: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dateclosesert: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dop1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dop2: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        dop3: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        dop4: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        status: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        GoodId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        GoodstesterId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    return materialstester;

};