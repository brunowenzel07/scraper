module.exports = (sequelize, DataTypes) => {
    const GalgosRace = sequelize.define('GalgosRace', {
        idSportinglife: DataTypes.INTEGER,
        date: DataTypes.STRING,
        hour: DataTypes.STRING,
        time: DataTypes.BIGINT,
        name: DataTypes.STRING,
        classe: DataTypes.STRING,
        amountRunners: DataTypes.INTEGER,
        prizes: DataTypes.TEXT,
        description: DataTypes.TEXT,
        oddP1: DataTypes.FLOAT,
        oddP2: DataTypes.FLOAT,
        oddP3: DataTypes.FLOAT,
        oddP4: DataTypes.FLOAT,
        oddP5: DataTypes.FLOAT,
        oddP6: DataTypes.FLOAT,
        oddP7: DataTypes.FLOAT,
        oddP8: DataTypes.FLOAT,
        oddP1Dec: DataTypes.STRING,
        oddP2Dec: DataTypes.STRING,
        oddP3Dec: DataTypes.STRING,
        oddP4Dec: DataTypes.STRING,
        oddP5Dec: DataTypes.STRING,
        oddP6Dec: DataTypes.STRING,
        oddP7Dec: DataTypes.STRING,
        oddP8Dec: DataTypes.STRING,
        rideToFinish1: DataTypes.INTEGER,
        rideToFinish2: DataTypes.INTEGER,
        rideToFinish3: DataTypes.INTEGER,
        rideToFinish4: DataTypes.INTEGER,
        rideToFinish5: DataTypes.INTEGER,
        rideToFinish6: DataTypes.INTEGER,
        rideToFinish7: DataTypes.INTEGER,
        rideToFinish8: DataTypes.INTEGER,
    });

    return GalgosRace;
}