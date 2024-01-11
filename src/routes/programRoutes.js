const { Router } = require("express");
const { createProgram, modifyProgram, getAllPrograms, getProgramDetails, saveGeneralData, getDenominations, getAdscriptions } = require('../controllers/programController');
const router = Router();

router.post('/createProgram', createProgram)
router.put('/modifyProgram/:idProgram', modifyProgram)
router.get('/getAllPrograms', getAllPrograms)
router.get('/getProgramDetails/:idProgram', getProgramDetails)
router.patch('/saveGeneralData/:idProgram', saveGeneralData)
router.get('/getDenominations', getDenominations)
router.get('/getAdscriptions', getAdscriptions)



module.exports = router;
