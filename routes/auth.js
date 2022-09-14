const express = require('express');

const router = express.Router();

const { 
    register, 
    login, 
    forgotpassword, 
    resetpassword,
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);

// router.post("/register", register);
// router.post("/login", login);
// router.post("/forgotpassword", forgotpassword);
// router.post("/resetpassword/:resetToken", resetpassword);




module.exports = router;