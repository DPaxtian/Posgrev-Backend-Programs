const { default: mongoose } = require('mongoose')
const program = require('mongoose')

const programSchema = new mongoose.Schema(
  {
    identificadorPrograma: {
      type: String,
      default: ""
    },
    activo:{
      type: String,
      default: "Activo"
    },
    informacionBasica: {
      nombrePrograma: String,
      claveDGP: String,
      nivel: String,
      clavePrograma: String,
      region: String,
      area: String,
      numDependencia: String,
      correoCoordinador: String,
      nombreCoordinador: String,
      anioPrograma: String
    }
  }
)

module.exports = program.model('program', programSchema);