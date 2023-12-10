const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");
// const [ getAllExpenses, getExpenseById, addExpense, updateExpense, deleteExpense,] = require('../controllers/expenseController')


//Get all expense for the authenticated user
router.get("/expense", authMiddleware, expenseController.getAllExpenses);



// Get a specific expense by ID
router.get("/expense/:id",authMiddleware,expenseController.getExpenseById);

// Add a new Expense
router.get("/expense",authMiddleware,expenseController.addExpense);

// Update an existing expense by ID
router.get("/expense/:id", authMiddleware, expenseController.updateExpense);

// Delete an expense by ID
router.get("/expense/:id", authMiddleware, expenseController.deleteExpense);

module.exports = router;