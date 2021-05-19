const express = require ('express');
const router = express.Router();

const{register, login, forgotPassword, resetPassword} = require ('../routes/auth');

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/passwordreset/:resetToken").put(resetPassword); // accepting reset token when resetting the password


module.exports = router;