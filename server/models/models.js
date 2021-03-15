const sequelize = require('../db');

const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING, unique: true},
        password: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: 'USER'}
    }
)

const Cart = sequelize.define('cart', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    }
)

const Device = sequelize.define('device', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        price: {type: DataTypes.REAL, allowNull: false},
        rating: {type: DataTypes.INTEGER, defaultValue: 0},
        img: {type: DataTypes.STRING, allowNull: false}
    }
)

const Type = sequelize.define('type', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false}
    }
)

const Brand = sequelize.define('brand', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false}
    }
)

const Rating = sequelize.define('rating', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        rate: {type: DataTypes.INTEGER, allowNull: false}
    }
)

const Cart_device = sequelize.define('cart_device', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    }
)

const Device_info = sequelize.define('device_info', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.STRING}
    }
)

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    }
)

// relationships
User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(Cart_device);
Cart_device.belongsTo(Cart);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(Cart_device);
Cart_device.belongsTo(Device);

Device.hasMany(Device_info);
Device_info.belongsTo(Device);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});

module.exports = {
    User,
    Cart,
    Cart_device,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    Device_info
}