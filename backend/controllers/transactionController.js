const Transaction = require('../model/Transaction');

// Get all transactions for spacefic user
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userID: req.user.id });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//