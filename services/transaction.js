const transaction = require('../models/transaction')

module.exports = class transactionService{
    static async createTransaction(data){
     try{
        const newtransaction = {
         sender: data.sender,
         resaver: data.resaver,
         amount: data.amount,
         id_sender: data.id_sender,
         id_resaver: data.id_resaver
        }
        const response = await transaction(newtransaction).save();
        return response;
     }catch(err){
        console.log(err);
     }
    }
}