const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController").default;
const authMiddleware = require("../middleware/authMiddleware");

//Get all expense for the authenticated user
router.get("/expense", authMiddleware, expenseController);
