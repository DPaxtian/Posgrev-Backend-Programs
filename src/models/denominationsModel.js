const { default: mongoose } = require('mongoose')
const denomination = require('mongoose')

const denominationSchema = new mongoose.Schema(
    {
        items: {
            type: Array
        }
    }
)

module.exports = denomination.model('denomination', denominationSchema);