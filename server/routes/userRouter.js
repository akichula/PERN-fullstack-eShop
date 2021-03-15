const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController')


router.get('/auth', userController.isAuth);
router.post('/login', userController.login);
router.post('/registration', userController.registration);

module.exports = router;