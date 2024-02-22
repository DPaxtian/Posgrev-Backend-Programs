const Program = require("../models/programModel");
const ProgramIndicators = require("../models/programIndicatorsModel")
const Denominations = require("../models/denominationsModel");
const Adscriptions = require("../models/adscriptionsModel")


const saveProgram = async (newProgram) => {
    return new Promise((resolve, reject) => {
        const programToSave = new Program(newProgram);
        programToSave.save()
            .then((result) => {
                resolve(200)
            })
            .catch((error) => {
                reject(500);
            });
    });
}


const modifyProgram = async (idProgram, programModified) => {
    return new Promise((resolve, reject) => {
        Program.updateOne({ identificadorPrograma: idProgram }, programModified)
            .then(() => {
                resolve(200);
            })
            .catch(() => {
                reject(500);
            })
    });
}


const getAllPrograms = async () => {
    let programsRecovered = [];
    return new Promise((resolve, reject) => {
        const programsResult = Program.find({ activo: "Activo" })
            .then((programsResult) => {
                programsRecovered = programsResult;
                resolve(programsRecovered);
            })
            .catch(() => {
                reject(500);
            })
    })
}


const getProgramDetails = async (idProgram) => {
    let programDetails = {};
    return new Promise((resolve, reject) => {
        const programRecovered = Program.findOne({ identificadorPrograma: idProgram })
            .then((programRecovered) => {
                programDetails = programRecovered;
                resolve(programDetails)
            })
            .catch((error) => {
                reject(500)
            });
    })
}


const saveGeneralData = async (identifierProgram, generalDataInformation) => {
    return new Promise((resolve, reject) => {
        ProgramIndicators.findOneAndUpdate({ identificadorPrograma: identifierProgram }, { $set: { "datosGenerales": generalDataInformation } })
            .then(() => {
                resolve(200)
            })
            .catch(() => {
                reject(500);
            });
    });
}


const saveProgramContext = async (identifierProgram, contextInformation) => {
    return new Promise((resolve, reject) => {
        ProgramIndicators.findOneAndUpdate({ identificadorPrograma: identifierProgram }, { $set: { "compromiso": contextInformation } })
            .then(() => {
                resolve(200)
            })
            .catch(() => {
                reject(500);
            });
    });
}


const saveProgramInfrastructure = async (identifierProgram, infrastuctureInformation) => {
    return new Promise((resolve, reject) => {
        ProgramIndicators.findOneAndUpdate({ identificadorPrograma: identifierProgram }, { $set: { "infraestructuraPrograma": infrastuctureInformation } })
            .then(() => {
                resolve(200)
            })
            .catch(() => {
                reject(500);
            });
    });
}


const saveProgramStudentInfo = async (identifierProgram, studentInfo) => {
    return new Promise((resolve, reject) => {
        ProgramIndicators.findOneAndUpdate({ identificadorPrograma: identifierProgram }, { $set: { "informacionSeguimiento": studentInfo } })
            .then(() => {
                resolve(200)
            })
            .catch(() => {
                reject(500);
            });
    });
}


const saveProgramResults = async (identifierProgram, results) => {
    return new Promise((resolve, reject) => {
        ProgramIndicators.findOneAndUpdate({ identificadorPrograma: identifierProgram }, { $set: { "resultados": results } })
            .then(() => {
                resolve(200)
            })
            .catch(() => {
                reject(500);
            });
    });
}


const saveScholarProcess = async (identifierProgram, scholarProcess) => {
    return new Promise((resolve, reject) => {
        ProgramIndicators.findOneAndUpdate({ identificadorPrograma: identifierProgram }, { $set: { "procesosEscolares": scholarProcess } })
            .then(() => {
                resolve(200)
            })
            .catch(() => {
                reject(500);
            });
    });
}



const getDenominations = async () => {
    let items = {};

    return new Promise((resolve, reject) => {
        const itemsObtained = Denominations.findOne({})
        .then((itemsObtained) => {
            items = itemsObtained
            resolve(items)
        })
        .catch((error) => {
            reject(500)
        })
    })
}


const getAdscriptions = async () => {
    let items = {};

    return new Promise((resolve, reject) => {
        const itemsObtained = Adscriptions.findOne({})
        .then((itemsObtained) => {
            items = itemsObtained
            resolve(items)
        })
        .catch((error) => {
            reject(500)
        })
    })
}


const createProgramIndicator = async (newProgramIndicator) => {
    return new Promise((resolve, reject) => {
        const programToSave = new ProgramIndicators(newProgramIndicator);
        programToSave.save()
            .then((result) => {
                resolve(200)
            })
            .catch((error) => {
                reject(500);
            });
    });
}




module.exports = {
    saveProgram,
    modifyProgram,
    getAllPrograms,
    getProgramDetails,
    saveProgramInfrastructure,
    saveScholarProcess,
    saveGeneralData,
    saveProgramContext,
    saveProgramStudentInfo,
    saveProgramResults,
    getDenominations,
    getAdscriptions,
    createProgramIndicator
}