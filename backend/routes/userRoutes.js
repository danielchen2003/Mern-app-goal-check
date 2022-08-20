const express = require("express")
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController")
//叫保护程序，从中间价，验证token什么的
const { protect } = require("../middleware/authMiddleware")
// 叫注册用户
//每次登陆有一个token getme 可以吧token转位用户信息
router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", protect, getMe)

module.exports = router
