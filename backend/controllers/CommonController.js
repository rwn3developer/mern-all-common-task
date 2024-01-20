const userModel = require('../models/userModel');

const cloudinary = require('cloudinary')

const getDatauri = require('../config/Datauriparser');

const addRecord = async(req,res) => {
    try{
         //file upload using datauri module use 
         //npm i datauri
         let file = getDatauri(req.file) 
         let cdb = await cloudinary.v2.uploader.upload(file.content);
         const image = {
             public_id : cdb.public_id,
             url : cdb.secure_url
         }
         //file upload end

        const add = await userModel.create({
            name : req.body.name,
            phone : req.body.phone,
            image
          });
          return res.status(200).send({
            success : true,
            message : "record add",
            user : add
          })
    }catch(err){
        console.log(err);
        return false;
    }
}

const viewRecord = async(req,res) => {
    try{
        let record = await userModel.find({});
        return res.status(200).send({
            success : true,
            message : "All user",
            record
        })
    }catch(err){
        console.log(err);
        return false;
    }
}


const deleteRecord = async(req,res) => {
    try{
        let old = await userModel.findById(req.params.id)
        await cloudinary.v2.uploader.destroy(old.image.public_id);
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success : true,
            message : "Record delete"
        })
    }catch(err){
        console.log(err);
        return false;
    }
}

const editsingle = async(req,res)=>{
    let id = req.params.id;
   try{
    let single = await userModel.findById(id); 
    return res.status(200).send({
        success : true,
        message : 'record',
        singleuser : single
    })
   }catch(err){
        console.log(err);
        return false;
   }
}

const updateRecord = async(req,res) => {
    try{
        let id = req.params.id;
        if(req.file){
            let old = await userModel.findById(id)
            await cloudinary.v2.uploader.destroy(old.image.public_id);

            //file upload
            let file = getDatauri(req.file)
            let cdb = await cloudinary.v2.uploader.upload(file.content);
            const image = {
                public_id : cdb.public_id,
                url : cdb.secure_url
            }
            //file upload end

            let updateUser = await userModel.findByIdAndUpdate(id,{
                name : req.body.name,
                phone : req.body.phone,
                image
            })

            return res.status(200).send({
                status : true,
                message : "User successfully update",
                updateUser
            })
        }else{
            let old = await userModel.findById(id);
            const image = {
                public_id : old.image.public_id,
                url : old.image.url
            }

            let updateUser = await userModel.findByIdAndUpdate(id,{
                name : req.body.name,
                phone : req.body.phone, 
                image 
            })

            return res.status(200).send({
                status : true,
                message : "User successfully update",
                updateUser
            })
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    addRecord,viewRecord,deleteRecord,updateRecord,editsingle
}