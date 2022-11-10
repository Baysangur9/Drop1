const { Router } = require('express');

const {categoriesController} = "../controllers/categories.controller"

const router = Router()

router.get('/', categoriesController.getCategory)
router.post('/', categoriesController.addCategory)
router.delete('/:id', categoriesController.deleteCategory)
