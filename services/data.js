const data = require("../models/data"); 

module.exports = class dataService{
    static async getAlldata(){
        try {
            const alldatas = await data.find().populate("id_client"); 
            return alldatas;
        } catch (error) {
            console.log(`Could not fetch datas ${error}`)
        }
    } 

    static async createdata(datas){
        try {
            const newdata = {
                cin: datas.cin,  
                phone: datas.phone,
                country: datas.country,
                city: datas.city,
                adresse: datas.adresse,
                postal: datas.postal,
                solde: datas.solde,
                born_date: datas.born_date,
                image: datas.image,
                id_client: datas.id_client
            }
           const response = await new data(newdata).save();
           return response;
        } catch (error) {
            console.log(error);
        } 
    }

    static async getdatabyId(dataId){
        try {
            const singledataResponse =  await data.findById({_id: dataId});
            return singledataResponse;
        } catch (error) {
            console.log(`data not found. ${error}`)
        }
    }

    static async updatedata(id,datas){
            try {
                const newdata = {
                    cin: datas.cin,  
                    phone: datas.phone,
                    country: datas.country,
                    city: datas.city,
                    adresse: datas.adresse,
                    postal: datas.postal,
                    solde: datas.solde,
                    born_date: datas.born_date,
                    image: datas.image,
                    id_client: datas.id_client
                }
                const updateResponse =  await data.findByIdAndUpdate({_id: id},newdata);
                return newdata;
            } catch (error) {
                console.log(`Could not update data ${error}` );

        }
    }

    static async deletedata(dataId){
        try {
            const deletedResponse = await data.findByIdAndDelete(dataId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete data ${error}`);
        }

    }
    
}