var express = require('express');
var router = express.Router();
const multer = require('multer')
const hc= require ('../controllar/home');


/* GET home page. */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/create',upload.single('image'), hc.create);
router.get('/show', hc.show);
router.delete('/Delete', hc.Delete);
router.patch('/updete', hc.updete);

module.exports = router;
