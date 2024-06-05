// *----------------------------------------------------------------
// * express.Router
//* ----------------------------------------------------------------

//? In Express.js, express. Router() is a mini Express application without all the server configurations but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize your routes and middleware to keep your code organized and maintainable.
//* https://expressjs.com/en/guide/routing.html
//? Use the express. Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".

const express = require('express');
const router = express.Router();
const authcontrollers = require('../controller/auth-controller')
const {signupSchema,loginSchema} = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware')
const authMiddleware = require('../middlewares/auth-middleware')

// Configure Multer
const multer = require('multer'); // Import Multer for file upload handling
const upload = multer({ dest: 'uploads/' });

// router.get('/', (req, res) =>{
//     res.status(200).send('Hello World using router!')
// });

// this is a simple example of a post or get request of one route
// router.route("/").get((req, res) =>{
//     res.status(200).send('Hello World using router!')
// });

router.route("/").get(authcontrollers.home);
router.route("/register").post( validate(signupSchema), authcontrollers.register);
router.route("/login").post( validate(loginSchema), authcontrollers.login);
router.route('/upload').post(upload.single("image"), authcontrollers.UserImage);
router.route("/user").get(authMiddleware ,authcontrollers.user);
router.route("/user/:id").get(authcontrollers.getUsersById);
router.route("/user/update/:id").patch(authcontrollers.UpdateUserById);


module.exports = router;