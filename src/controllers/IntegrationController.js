const routes = require('../routes');
const pipeDriveService = require('../services/PipedriveService');
const blingController = require('./BlingController');
const databaseController = require('./DataBaseController');

module.exports = {
    async index(req,res){
        const pipeDriveData = await pipeDriveService.getPipeDriveData({status:"won",start:0})
        const parsedDriveData = blingController.parseBlingData(pipeDriveData.data);
        await blingController.saveData(parsedDriveData);
        await databaseController.save(pipeDriveData)
        return res.send(204)
    },
    async get(req,res){
        const response = await databaseController.search();
        return res.json(response)
    }

}