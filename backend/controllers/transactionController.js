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

//cont get transaction with id 
const getTransactionByID = async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            _id: req.params.id,
            userID: req.user.id,
        });
        if (!transaction) {
            return res.status(400).json({ message: "Transaction not Found" });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

// add new Transaction
const addNewTransaction = async (req, res) => {
    const transaction = new Transaction({
      name: req.body.name,
      amount: req.body.amount,
      category: req.body.category,
      userId: req.user.id,
    });

    try {
        const NewTransaction = await transaction.save();
        res.status(201).json(NewTransaction)
    } catch (error) {
        res.status(400).json({message : `${error} `})
        
    }
}


// delete a transaction by id 
const deleteTransaction = async (req, res) => {
    try {
        const deletedTransaction = await Transaction.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id,
        });

        if (!deletedTransaction) {
            return res.status(404).json({ message: "Transaction Not Found" })
        }
        res.json({ message: "Transaction Deleted Succefully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

// upadte an transaction

const updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndUpdate({
            _id: req.params.id,
            userId: req.user.id
        }, {
            $set: {
                name: req.body.name,
                amount: req.body.amount,
                category: req.body.category,
            },
        },
            { new: true }
        );
        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


module.exports = {
    getAllTransactions, 
    getTransactionByID,
    deleteTransaction,
    updateTransaction,
    addNewTransaction
}