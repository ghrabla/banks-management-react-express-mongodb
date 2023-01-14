const dataService = require("../services/data");
const AppError = require("../helpers/appError");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './client/public');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage });
module.exports = class data {
  static async uploadimage(req, res) { 
   
    upload.single('file')(req, res, (err) => {
      const uploadedFile = req.file;
      if (err) {
        // An error occurred when uploading
        return res.status(400).json({error: err.message});
      }
      // Do something with the file
      // ...
      res.status(200).json({file: uploadedFile.filename });
    });
  }

  static async apiGetAlldata(req, res, next) {
    try {
      const data = await dataService.getAlldata();
      if (!data) {
        res.status(404).json({ message: "There are no data found yet!" });
      } else {
        res.json(data);
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetdataById(req, res, next) {
    try {
      let id = req.params.id || {};
      const data = await dataService.getdatabyId(id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetdataByIdClient(req, res, next) {
    try {
      let id = req.params.id || {};
      const data = await dataService.GetdataByIdClient(id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreatedata(req, res, next) {
    try {
      if (!req.body) return next(new AppError("No form data found", 404));
      const createddata = await dataService.createdata(req.body);
      res.json({
        data: createddata,
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdatedata(req, res, next) {
    try {
      if (!req.body) return next(new AppError("No form data found", 404));
      const updateddata = await dataService.updatedata(req.params.id, req.body);
      if (updateddata.modifiedCount === 0) {
        throw new Error("Unable to update data, error occord");
      }
      res.json(updateddata);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeletedata(req, res, next) {
    try {
      const dataId = req.params.id;
      const deleteResponse = await dataService.deletedata(dataId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
