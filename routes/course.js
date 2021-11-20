const express = require('express');
const CourseController = require('../controllers/CourseController')

const router = express.Router();

router.route('/').post(CourseController.createCourse);
router.route('/').get(CourseController.getAllCourse);
router.route('/:slug').get(CourseController.getCourse);

module.exports = router;