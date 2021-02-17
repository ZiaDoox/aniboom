import path from 'path'
import express from 'express'
import multer from 'multer'
import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'


dotenv.config();

const cloud = cloudinary.v2;

cloud.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router()

const storage = new CloudinaryStorage({
  cloudinary: cloud,
  params: {
    folder: 'product_images',
    public_id: (req, file) =>
      `${file.originalname.split('.')[0]}-${Date.now()}`,
  }
});



function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(req.file.path)
})

export default router
