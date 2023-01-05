const data = require("../models/data"); 

module.exports = class dataService{
    static async getAlldata(){
        try {
            const alldatas = await data.find(); 
            return alldatas;
        } catch (error) {
            console.log(`Could not fetch datas ${error}`)
        }
    } 

    static async createdata(data){
        try {
            const newdata = {
                cin: data.cin,  
                phone: data.phone,
                country: data.country,
                city: data.city,
                adresse: data.adresse,
                born_date: data.born_date,
                image: data.image,
                id_client: data.id_client
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

    static async updatedata(id,data){
            try {
                const newdata = {
                    cin: data.cin,  
                    phone: data.phone,
                    country: data.country,
                    city: data.city,
                    adresse: data.adresse,
                    born_date: data.born_date,
                    image: data.image,
                    id_client: data.id_client
                }
                const updateResponse =  await data.findByIdAndUpdate({_id: id},newdata);
                    return updateResponse;
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