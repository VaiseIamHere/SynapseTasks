const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        genre:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: true
        },
        available:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const bookmodel = mongoose.model("Book", bookSchema)

module.exports = bookmodel