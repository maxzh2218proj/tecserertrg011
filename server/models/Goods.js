module.exports = (sequelize, DataTypes) => {

    const Goods = sequelize.define("Goods", {
        productname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heattreatment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heattreatment2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        othersdocs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        othersdocs2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        technicalsolution: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        technicalsolution2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vsrnm: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vsrnm2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reportingpassport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reportingpassport2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        control: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Goods.associate = (models) => {
        Goods.hasMany(models.materials, {
            onDelete: "cascade",
        })
    }

    return Goods;

};