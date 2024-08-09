// Iteration 2 - Recipe Model

const { Schema, model } = require('mongoose');

// Creates Schema
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    instructions: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
    },
    ingredients: [String],
    image: {
        type: String,
        default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    duration: {
        type: Number,
        min: 0
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
})

// Asociates Schema with model creating a new Recipe model
const Recipe = new model('Recipe', recipeSchema)

// Exports Recipe modul to use from app.js
module.exports = Recipe