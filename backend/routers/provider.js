/**
 * @description Express router for provider specifc data.
 * @author Jithin Zacharia
 */

const router = require('express').Router();
const  getProviderController = require('../controllers/provider/getProvidersController');
const getProviderDetailsController = require('../controllers/provider/getProviderDetailsController')
const getProviderDetailsByCity = require('../controllers/provider/getProviderDetailsByCityController')
const updateProviderController = require('../controllers/provider/updateProviderController');

router.get('/all', getProviderController.getAllProvider);
router.get('/:partnerId',getProviderDetailsController.getProviderDetails)
router.get('/city/:city',getProviderDetailsByCity.getProviderDetailsByCity)
router.put('/update', updateProviderController.updateProvider);

module.exports = router;
