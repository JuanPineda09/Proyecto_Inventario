const {Router} = require('express');
const usersControllers = require('../controllers/usersControllers');

const router = Router();

router.get("/users", usersControllers.getUsers);

router.get("/users/:id", usersControllers.getIdUsers);

router.post("/users", usersControllers.postUsers);

router.delete("/users/:id", usersControllers.deleteIdUsers);

router.put("/users/:id", usersControllers.putIdUsers);

module.exports = router;