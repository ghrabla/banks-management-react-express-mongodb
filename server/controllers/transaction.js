const transactionService = require("../services/transaction")
const AppError = require('../helpers/appError')

module.exports = class transaction{
    static async apicreateTransaction(req,res,next){
        try{
            if (!req.body) return next(new AppError("No form data found", 404));
           const response = await transactionService.createTransaction(req.body)
           res.status(200).json(response)
        }catch(err){
            res.status(500).json({ error: error });
        }
    }
}