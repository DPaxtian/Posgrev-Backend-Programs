const programService = require("../services/programServices");


const createProgram = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "Program not saved :(";
    
    try{
        const newProgram = req.body;
        resultCode = await programService.saveProgram(newProgram);
        responseMessage = "Program saved succesfully";
    } catch (error){
        responseMessage = "An error has been ocurred while saving program"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage
    });
}


const modifyProgram = async (req, res) => {
    let codeResult = 500;
    let responseMessage = "Program not updated";

    try{
        let idProgram = req.params.idProgram;
        let programModified = req.body;

        let resultOperation = await programService.modifyProgram(idProgram, programModified)

        if(resultOperation = 200){
            codeResult = 200;
            responseMessage = "Program updated succesfully"
        }
    } catch (error){
        responseMessage = "An error has been ocurred"
    }

    return res.status(codeResult).json({
        code: codeResult,
        msg: responseMessage
    });
}


const getProgramDetails = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "Program not found"
    let response = null

    try{
        const programRecovered = await programService.getProgramDetails(req.params.idProgram);

        if(programRecovered !== null){
            resultCode = 200;
            responseMessage = "Program found"
            response = programRecovered;
        }
    } catch (error) {
        responseMessage = "An error has been ocurred";
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
        response
    });
}


const getAllPrograms = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "An error was ocurred :(";
    let response = [];

    try{
        const programsRecovered = await programService.getAllPrograms();
        if(programsRecovered != null){
            resultCode = 200;
            responseMessage = "Programs found";
            response = programsRecovered;
        }
    }catch(error){
        responseMessage = "An error has been ocurred while founding programs"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
        response
    })

}


const saveGeneralData = async (req, res) => {
    let resultCode = 500;
    let response = "An error was ocurred :(";

    try{
        const identifierProgram = req.params.idProgram;
        const generalDataInformation = req.body;

        resultCode = await programService.saveGeneralData(identifierProgram, generalDataInformation);
        if(resultCode == 200){
            response = "General data updated succesfully"
        }
    } catch(error){
        response = "An error has been ocurred while saving general data"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: response
    });
}


const saveProgramContext = async (req, res) => {
    let resultCode = 500;
    let response = "An error was ocurred :(";

    try{
        const identifierProgram = req.params.idProgram;
        const programContextInfo = req.body;

        resultCode = await programService.saveProgramContext(identifierProgram, programContextInfo);
        if(resultCode == 200){
            response = "Program context updated succesfully"
        }
    } catch(error){
        response = "An error has been ocurred while saving the program context"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: response
    });
}


const saveProgramInfrastructure = async (req, res) => {
    let resultCode = 500;
    let response = "An error was ocurred :(";

    try{
        const identifierProgram = req.params.idProgram;
        const infrastructureInformation = req.body;

        resultCode = await programService.saveProgramInfrastructure(identifierProgram, infrastructureInformation);
        if(resultCode == 200){
            response = "Program Infrastructure updated succesfully"
        }
    } catch(error){
        response = "An error has been ocurred while saving general data"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: response
    });
}


const saveStudentInfo = async (req, res) => {
    let resultCode = 500;
    let response = "An error was ocurred :(";

    try{
        const identifierProgram = req.params.idProgram;
        const studentInfo = req.body;

        resultCode = await programService.saveProgramStudentInfo(identifierProgram, studentInfo);
        if(resultCode == 200){
            response = "Student info updated succesfully"
        }
    } catch(error){
        response = "An error has been ocurred while saving general data"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: response
    });
}


const saveProgramResults = async (req, res) => {
    let resultCode = 500;
    let response = "An error was ocurred :(";

    try{
        const identifierProgram = req.params.idProgram;
        const results = req.body;

        resultCode = await programService.saveProgramResults(identifierProgram, results);
        if(resultCode == 200){
            response = "program results updated succesfully"
        }
    } catch(error){
        response = "An error has been ocurred while saving the program results"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: response
    });
}


const saveScholarProcess = async (req, res) => {
    let resultCode = 500;
    let response = "An error was ocurred :(";

    try{
        const identifierProgram = req.params.idProgram;
        const scholarProcess = req.body;

        resultCode = await programService.saveScholarProcess(identifierProgram, scholarProcess);
        if(resultCode == 200){
            response = "scholar processes updated succesfully"
        }
    } catch(error){
        response = "An error has been ocurred while saving the scholar processes"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: response
    });
}


const getDenominations = async (req, res) => {
    let response = {}
    let resultCode = 500
    let responseMessage = "Denominations not recovered"

    try{
        response = await programService.getDenominations();
        if(response !== null){
            resultCode = 200
            responseMessage = 'Denominations recovered successfully'
        }
    } catch(error){
        console.log('Error in getDenominations controller')
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
        response
    })
}


const getAdscriptions = async (req, res) => {
    let response = {}
    let resultCode = 500
    let responseMessage = "Adscriptions not recovered"

    try{
        response = await programService.getAdscriptions();
        if(response !== null){
            resultCode = 200
            responseMessage = 'Adscriptions recovered successfully'
        }
    } catch(error){
        console.log('Error in getAdscriptions controller')
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
        response
    })
}


const createProgramIndicator = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "Program not saved :(";
    
    try{
        const newProgram = req.body;
        resultCode = await programService.createProgramIndicator(newProgram);
        responseMessage = "ProgramIndicator created succesfully";
    } catch (error){
        responseMessage = "An error has been ocurred while creating the program indicator program"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage
    });
}

module.exports = {
    createProgram,
    modifyProgram,
    getProgramDetails,
    saveProgramInfrastructure,
    saveStudentInfo,
    saveScholarProcess,
    saveProgramContext,
    saveProgramResults,
    getAllPrograms,
    saveGeneralData,
    getDenominations,
    getAdscriptions,
    createProgramIndicator
}