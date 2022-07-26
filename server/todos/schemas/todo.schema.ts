import * as mongoose from 'mongoose'

export const TododShema = new mongoose.Schema({
    code: String,
    name: String
})