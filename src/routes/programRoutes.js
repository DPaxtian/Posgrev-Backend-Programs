const { Router } = require("express");
const { createProgram, modifyProgram, getAllPrograms, getProgramDetails, saveProgramContext, saveScholarProcess, saveProgramInfrastructure, saveStudentInfo, saveGeneralData, saveProgramResults, getDenominations, getAdscriptions } = require('../controllers/programController');
const router = Router();

router.post('/createProgram', createProgram)
router.put('/modifyProgram/:idProgram', modifyProgram)
router.get('/getAllPrograms', getAllPrograms)
router.get('/getProgramDetails/:idProgram', getProgramDetails)
router.patch('/saveGeneralData/:idProgram', saveGeneralData)
router.patch('/saveProgramContext/:idProgram', saveProgramContext)
router.patch('/saveProgramInfrastucture/:idProgram', saveProgramInfrastructure)
router.patch('/saveStudentInfo/:idProgram', saveStudentInfo)
router.patch('/saveResults/:idProgram', saveProgramResults)
router.patch('/saveScholarProcess/:idProgram', saveScholarProcess)
router.get('/getDenominations', getDenominations)
router.get('/getAdscriptions', getAdscriptions)



module.exports = router;
