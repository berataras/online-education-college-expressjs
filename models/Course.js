const mongoose = require('mongoose');
const slugify = require("slugify");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {type: String, max: 250, required: true, unique: true},
    description: {type: String, trim: true, required: true},
    image: String,
    slug: {type: String, unique: true},
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    createdAt: {type: Date, default: Date.now}
})

CourseSchema.pre('validate', function (next){
    this.slug = slugify(this.name, {string: true, lower: true})
    next();
})

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;