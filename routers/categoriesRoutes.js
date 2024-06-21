const {Router} = require('express');
const categoriesControllers = require('../controllers/categoriesControllers');

const router = Router();

router.get("/categories", categoriesControllers.getCategories);

router.get("/caegories/:id", categoriesControllers.getIdCategories);

router.post("/categories", categoriesControllers.postCategories);

router.delete("/categories/:id", categoriesControllers.deleteIdCategories);

router.put("/categories/:id", categoriesControllers.putIdCategories);

module.exports = router;