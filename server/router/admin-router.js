const express = require('express');
const adminController = require('../controller/admin-controller');
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();
router.route('/users').get(authMiddleware, adminMiddleware,adminController.getAllUsers);
router.route('/users/:id').get(authMiddleware, adminMiddleware,adminController.getUsersById);
router.route('/users/update/:id').patch(authMiddleware, adminMiddleware,adminController.UpdateUserById);
router.route("/users/delete/:id").delete( authMiddleware, adminMiddleware, adminController.deleteUserById);
router.route('/contacts').get( authMiddleware, adminMiddleware, adminController.getAllContacts);
router.route('/AdminServices').get( authMiddleware, adminMiddleware, adminController.getAllServices);
router.route('/AddServices').post( authMiddleware, adminMiddleware, adminController.AddServices);
router.route("/AdminServices/:id").get(authMiddleware, adminMiddleware, adminController.getServiceById);
router.route('/AdminServices/update/:id').patch(authMiddleware, adminMiddleware,adminController.UpdateServiceById);
router.route("/AdminServices/delete/:id").delete( authMiddleware, adminMiddleware, adminController.deleteServiceById);
router.route("/contacts/delete/:id").delete( authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router; 