const { default: mongoose } = require('mongoose')
const programIndicators = require('mongoose')

const programIndicatorsSchema = new mongoose.Schema(
  {
    identificadorPrograma: {
      type: String,
      default: ""
    },
    activo:{
      type: String,
      default: "Activo"
    },
    status:{
        type: String,
        default: "No Completado"
    },
    periodoEvaluacion: {
        type: String,
        default: ""
    },
    datosGenerales: {
      estado: {
        type: String,
        default: "No Realizada"
      },
      denominacion: {
        type: String,
        default: " "
      },
      antecedentes: {
        fechaAprobacion: {
          type: String,
          default: " "
        },
        inicioAct: {
          type: String,
          default: " "
        }
      },
      nivel: {
        type: String,
        default: " "
      },
      adsreg: {
        adscripcion: {
          type: String,
          default: " "
        },
        region: {
          type: String,
          default: " "
        }
      },
      modalidad: {
        type: String,
        default: " "
      },
      orientacion: {
        type: String,
        default: " "
      },
      paginaWeb: {
        type: String,
        default: " "
      },
      registroProfesiones: {
        type: String,
        default: " "
      },
      duracion: {
        type: String,
        default: ""
      },
      periodosLectivos: {
        type: String,
        default: ""
      },
      periodicidadConvotatoria:{
        type: String,
        default: ""
      },
      cuotaRecuperacion: {
        type: String,
        default: ""
      },
      pronaces:{
        type: Array,
        default: []
      }
    },
    compromiso: {
      estado: {
        type: String,
        default: "No Realizada"
      },
      compromisoPosgrado:{
        type: String,
        default: ""
      },
      vinculacion: {
        type: String,
        default: ""
      },
      actividadesRetribucion: {
        type: String,
        default: ""
      }
    },
    infraestructuraPrograma: {
      estado: {
        type: String,
        default: "No Realizada"
      },
      planEstudios: {
        type: String,
        default: " "
      },
      fechaActualizacionPlan: {
        type: Date,
        default: Date.now
      },
      cambiosPlan: {
        type: String,
        default: ""
      },
      mapaCurricular: {
        type: String,
        default: " "
      },
      lgac: {
        type: String,
        default: " "
      },
      nucleoAcadBas: {
        profTiemCom: {
          type: String,
          default: " "
        },
        profTiemPar: {
          type: String,
          default: " "
        },
        colaboradores: {
          type: String,
          default: " "
        },
        infoProf: {
          type: String,
          default: " "
        }
      },
      infraestructuraPrograma: {
        type: String,
        default: " "
      },
      actaConsejoConsultivo: {
        type: String,
        default: ""
      },
      actaConsejoArea: {
        type: String,
        default: ""
      },
      actaActualizacionPlan:{
        type: String,
        default: ""
      }
    },
    procesosEscolares: {
      estado: {
        type: String,
        default: "No Realizada"
      },
      procesoAdmision: {
        type: String,
        default: " "
      },
      procesoMovilidad: {
        type: String,
        default: ""
      },
      procesoCondonacion: {
        type: String,
        default: ""
      },
      procesoBeca: {
        type: String,
        default: ""
      },
      trayectoriaEscolar: {
        type: String,
        default: ""
      },
      procesoTitulacion: {
        type: String,
        default: ""
      },
      procesoDobleTitulacion: {
        type: String,
        default: ""
      }
    },
    informacionSeguimiento: {
      estado: {
        type: String,
        default: "No Realizada"
      },
      estrategiasAntiplagio: {
        type: String,
        default: ""
      },
      estudioFactibilidad: {
        type: String,
        default: ""
      },
      demanda: {
        totalAspirantes:{
          type: Number,
          default: 0
        },
        informacionAspirantes: {
          type: String,
          default: ""
        }
      },
      aspirantesSeleccionados: {
        numAspirantesSeleccionados: {
          type: Number,
          default: 0
        },
        informacionAspirantesSeleccionados:{
          type: String,
          default: ""
        }
      },
      tasaTitulacion: {
        porcentajeTasaTitulacion: {
          type: String,
          default: ""
        },
        informacionTitulados:{
          type: String,
          default: ""
        }
      },
      tasaTerminal:{
        tasaEficienciaTerminal:{
          type: String,
          default: ""
        },
        analisisEficienciaTerminal:{
          type: String,
          default: ""
        }
      },
      movilidadEstudiantil:{
        type: String,
        default: ""
      },
      apoyoCondonacion:{
        type: String,
        default: ""
      },
      becasEstudiantiles:{
        type: String,
        default: ""
      },
      bajasEstudiantiles: {
        type: String,
        default: ""
      },
      colabSecSoc: {
        type: String,
        default: ""
      },
      cuotaRecuperacionGeneracion:{
        type: String,
        default: ""
      },
      redEgresados: {
        type: String,
        default: ""
      },
      produccionLgac: {
        type: String,
        default: ""
      },
      direccionTesis:{
        type: String,
        default: ""
      },
      tutoriasProfEst:{
        type: String,
        default: ""
      },
      comiteGraduacion: {
        type: String,
        default: ""
      }
    },
    resultados: {
      estado: {
        type: String,
        default: "No Realizada"
      },
      planMejora: {
        type: String,
        default: " "
      },
      reporteAutoeval: {
        type: String,
        default: " "
      },
      percepcionPrograma: {
        type: String,
        default: ""
      }
    }
  }
)

module.exports = programIndicators.model('programIndicatos', programIndicatorsSchema);