const { default: mongoose } = require('mongoose')
const adscription = require('mongoose')

const adscriptionSchema = new mongoose.Schema(
    {
        items: {
            type: Array
        }
    }
)

module.exports = adscription.model('adscription', adscriptionSchema);