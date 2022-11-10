const { Router } = require('express');
const { newsController } = require('../controllers/News.controller');

const router = Router();

router.get('/news', newsController.getNews);
router.post('/news', newsController.addNews);
router.patch('/', newsController.updateNews);
router.delete('/news/:id', newsController.deleteNews);
router.get('/:id', newsController.getNewsById)
router.get('/category/:categoryID', newsController.getNewsByCategory)



module.exports = router;