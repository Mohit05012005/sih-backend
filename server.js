
const express = require('express');
const multer = require('multer');
const clientSchema = require('./model/clientschema');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost:27017/userdocinfo')
.then(()=>{
    console.log("connected to the db");
})
.catch((err)=>{
    console.log("not connected! "+err);
})
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

app.post('/upload', upload.single('file'), async(req, res) => {
    console.log(req.file);
    const {filename,path,mimetype} = req.file;
    let obj = {
        filename : filename,
        path: path,
        contentType: mimetype
    }
    await clientSchema.create(obj);
    res.send('File uploaded successfully');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});