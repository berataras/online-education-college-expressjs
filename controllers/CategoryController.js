const Category = require('../models/Category')
const Course = require('../models/Course')

exports.createCategory = async (req, res) => {
    const category = await Category.create(req.body)

    res.status(201).json({
        status: 'success',
        category
    })
}

exports.getCourses = async (req, res) => {
    const category = await Category.findOne({slug: req.params.slug})
    const courses = await Course.find({category: category._id})

    res.status(201).render('course', {
        status: 'success',
        courses,
        page_name: ''
    })
}
