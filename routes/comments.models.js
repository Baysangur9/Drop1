const { Router }  = require('express')
const commentsController = require('../controllers/comments.controller')



const router = Router()




router.get('/:newsId', commentsController.getCom)
router.post('/:newsId', commentsController.addCom)
router.delete('/:comId', commentsController.deleteCom)


module.exports = router