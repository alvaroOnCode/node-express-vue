const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        ingredients: { type: Array, required: true },
        difficulty: { type: String, required: true },
        persons: { type: Number, required: true },
        time: { type: Number, required: true }
    },
    {
        strict: false
    }
);

recipeSchema.statics.getById = function(id) {
    return this.findOne({ _id: id })
        .lean()
        .exec();
};

recipeSchema.statics.getAll = function() {
    return this.find()
        .sort({ title: 'asc' })
        .exec();
};

module.exports = mongoose.model ('Recipe', recipeSchema);