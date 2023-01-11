const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin");
const clientCtrl = require("../controllers/client");
const dataCtrl = require("../controllers/data");
const { protectadmin } = require("../middlewares/admin");     
const { protectclient } = require("../middlewares/client");     
 

// admin routes
router.get("/admins",adminCtrl.apiGetAlladmins);
router.post("/admin/login", adminCtrl.apiCheckadmin);
router.post("/admin/register",adminCtrl.apiCreateadmin);
router.get("/admin/:id", adminCtrl.apiGetadminById);
router.put("/admin/:id", adminCtrl.apiUpdateadmin);
router.delete("/admin/:id", adminCtrl.apiDeleteadmin); 

// client routes
router.get("/clients",clientCtrl.apiGetAllclients);
router.post("/client/login", clientCtrl.apiCheckclient);
router.post("/client/register",clientCtrl.apiCreateclient);
router.get("/client/:id", clientCtrl.apiGetclientById);
router.put("/client/:id", clientCtrl.apiUpdateclient);
router.delete("/client/:id", clientCtrl.apiDeleteclient); 

// data routes
router.get("/data",dataCtrl.apiGetAlldata);
router.post("/data/create",dataCtrl.apiCreatedata);
router.get("/data/:id", dataCtrl.apiGetdataById);
router.put("/data/:id", dataCtrl.apiUpdatedata);
router.delete("/data/:id", dataCtrl.apiDeletedata); 
router.post("/data/upload", dataCtrl.uploadimage);  

module.exports = router; 