const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');


// get All transactions
router.get('/transactions', authMiddleware, transactionController.getAllTransactions)

// get transaction by id 
router.get('/transactions/:id', authMiddleware, transactionController.getTransactionByID)

// Add new transaction
router.get('/transactions/', authMiddleware, transactionController.addNewTransaction)

//UPDATE AN exsiting transaction
router.get('/transactions/:id', authMiddleware, transactionController.updateTransaction);

//delete an existing transaction
router.delete('/transactions/:id', authMiddleware, transactionController.deleteTransaction)