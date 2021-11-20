const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.userID)
  res.render('index', { page_name: 'index' });
});

router.get('/category/:slug', CategoryController.getCourses);
router.post('/createCategory', CategoryController.createCategory);

module.exports = router;
