const express = require('express');

const routes = express.Router();

const cloudinary = require('cloudinary').v2;

const multer = require('multer');

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'coderking',
    api_key: '894478555391115',
    api_secret: 'gNOzQfa7BRLtN0MibIdiZHyfQnU'
  });

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }); 
const fileUpload = upload.single('image');

const commoncontroller = require('../controllers/CommonController');


routes.post('/add',fileUpload,commoncontroller.addRecord);
routes.get('/view',commoncontroller.viewRecord);
routes.delete('/delete/:id',commoncontroller.deleteRecord);
routes.get('/edit-single/:id',commoncontroller.editsingle);

routes.put('/edit/:id',fileUpload,commoncontroller.updateRecord);




module.exports = routes;