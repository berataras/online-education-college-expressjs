const Course = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req, res) => {
    try{
        const course = await Course.create(req.body);
        res.status(201).json({
            status: 'success',
            course
        })
    }catch (e){
        res.status(400).json({status: 'error', e})
    }
}

exports.getAllCourse = async (req, res) => {
    try{
        const courses = await Course.find({}).sort('desc');
        res.status(201).render('course', {
            courses,
            page_name: 'courses'
        })
    }catch (e){
        res.status(400).json({status: 'error', e})
    }
}

exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findOne({slug: req.params.slug})
        const categories = await Category.find({}).sort('desc');

        res.status(201).render('course_detail', {
            course,
            categories,
            page_name: '',
        })
    }catch (e){
        res.status(400).json({status: 'error', e})
    }
}