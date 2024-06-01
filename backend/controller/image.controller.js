import File from "../model/file.model.js"

export const uploadImage = async(req, res) =>{

    const fileObject = {
        path: req.file.path,
        name: req.file.originalname,
    }
    try {
        const file = await File.create(fileObject);

        res.status(200).json({path:`https://file-sharing-ohyp.onrender.com/file/${file._id}`})
    } 
    catch (error) {
        console.log("Error in uploadImage ",error.message);
        res.status(500).json({error: error.message})
    }
}

export const downloadImage = async(req,res) => {
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadCount++;
        await file.save();
        res.download(file.path, file.name);
        // fs.unlink(req.file.path, (err) => {
        //     if (err) {
        //         console.log("Error in deleting file from local uploads folder: ", err.message);
        //     }
        // });
    } 
    catch (error) {
        console.log("Error in downloadImage ",error.message);
        res.status(500).json({ error: error.message })
    }
}