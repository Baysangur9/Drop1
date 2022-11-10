const { Router } = require('express')
const { NewsController } = require('../controllers/News.controller')

const router = Router() 

router.use('/News',require('./News.route'))
router.use('/News', NewsRoute)


module.exports = router