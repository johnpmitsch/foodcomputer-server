module.exports = (sequelize, DataTypes) => {
  const FoodComputer = sequelize.define(
    "FoodComputer",
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate(models) {
          models.FoodComputer.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return FoodComputer;
};
