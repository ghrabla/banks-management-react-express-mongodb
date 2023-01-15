const clientService = require("../services/client");
const AppError = require("../helpers/appError");
const bcrypt = require("bcrypt");
const client = require("../models/client");
const datamodel = require("../models/data");
module.exports = class client {
  static async apiGetAllclients(req, res, next) {
    try {
      const clients = await clientService.getAllclients(); 
      if (!clients) {
        res.status(404).json("There are no client found yet!");
      }
      res.json(clients);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetclientById(req, res, next) { 
    try {
      let id = req.params.id || {};
      const client = await clientService.getclientbyId(id);
      res.json(client);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCheckclient(req, res, next) { 
    try { 
      const client = await clientService.clientlogin(req.body);
      const validPassword = await bcrypt.compare(req.body.password, client[0].password);
      if (validPassword) {
        res.status(200).json(
       { client : client[0],
         token: await clientService.generateToken(client[0]._id),
        });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
      //  res.json();
    } catch (error) {
      res.status(500).json({ error: "invalid email" });
    }
  }

  static async apiExistclient(req, res, next) { 
    try { 
      const client = await clientService.clientcheck(req.body);
      if(client.length != 0){
        const id = client[0]._id
        const data = await datamodel.find({id_client: id})
        const updated = await datamodel.findByIdAndUpdate({_id: data[0]._id},{solde: req.body.solde*1 + data[0].solde*1})
        const data2 = await datamodel.find({id_client: req.body.id})
        const updated2 = await datamodel.findByIdAndUpdate({_id: data2[0]._id},{solde: data2[0].solde*1 - req.body.solde*1})
        res.status(200).json({message: "updated"})
      }else{
        res.status(200).json({message: "not exist"})
      }
    } catch (error) {
      res.status(500).json({ error: "something went wrong" });
    }
  }

  static async apiCreateclient(req, res, next) {
    try {
      if (!req.body) return next(new AppError("No form data found", 404));
      const createdclient =  await clientService.createclient(req.body);
      const thetoken = await clientService.generateToken(createdclient._id)
      res.json({
          client: createdclient, 
          token: thetoken
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdateclient(req, res, next) {
    try {
      const updatedclient = await clientService.updateclient(req.params.id,req.body.fullname,req.body.email,req.body.password);
      if (updatedclient.modifiedCount === 0) {
        throw new Error("Unable to update client, error occord");
      }

      res.json(updatedclient);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeleteclient(req, res, next) {
    try {
      const clientId = req.params.id;
      const deleteResponse = await clientService.deleteclient(clientId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
 
};
