const express = require("express");
const router = express.Router();
const { materials } = require("../models");
//const {validateToken} = require("../middlewares/AuthMiddleware")
const upload = require("../middlewares/upload");
const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

const db = require("../models");
const Material = db.materials;

const brands = require("../controllers/brands");

router.get("/:goodId", async (req, res) => {//ALL MATERIALS CONCRET GOOD
  const goodId = req.params.goodId;
  const Materials = await materials.findAll({ where: { GoodId: goodId } });
  res.json(Materials);
});

router.get("/:id", async (req, res) => {//ONE MATERIAL
    
  const respon = await Goods.findOne({
      where: {
          id: req.params.id,
      },
  });
  res.json(respon)

})

router.post("/", async (req, res) => {
  const material = req.body;
  await materials.create(material);
  res.json(material);
})

router.post("/:id", upload.single("file"), async (req, res) => {
  try {

    let {id} = req.params

    console.log(id)

    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();
      rows.shift();
      rows.shift();
      rows.shift();
      rows.shift();
      rows.shift();
      rows.shift();
      rows.shift();

      let materials = [];

      rows.forEach((row) => {
        let material = {
          materialname: row[0],
          code: row[1],
          mass: row[2],
          normgood: row[3],
          normorder: row[4],
          note: row[5],
          pki: row[6],
          account: row[7],
          datepay: row[8],
          supplier: row[9],
          datearrival: row[10],
          datevk: row[11],
          dateotk: row[12],
          sertificate: row[13],
          dateclosesert: row[14],
          dop1: row[15],
          dop2: row[16],
          dop3: row[17],
          dop4: row[18],
          GoodId: id,
        };

        materials.push(material);
      });

      Material.bulkCreate(materials)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    //console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
})

router.patch("/:id", async (req, res) => {

  try{

      await materials.update(req.body, {
          where: {
              id: req.params.id,
          },
      });

      res.status(200).json({Message: "Material update successfull"})

  }catch(error){

      //console.log(error)

  }

})

router.patch('/pkii/:id',brands.upload21,brands.updateBrands21);
router.patch('/sert/:id',brands.upload22,brands.updateBrands22);

/*router.delete("/:materialId", async (req, res) => {

  const materialId = req.params.materialId;
  
  await materials.destroy({
    where: {
      id: materialId,
    },
  });
  
  res.json("DELETE SUCCESS")
  
});*/

router.delete("/:id", async (req, res) => {

  try{

      await materials.destroy({
          where: {
              id: req.params.id,
          },
      });

      res.status(200).json({Message: "Material delete successfull"})

  }catch(error){

      console.log(error)

  }
})

router.delete("/pkii/:id", async (req, res) => {

  const Materials = await materials.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!Materials) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserveroriginal/ПКИ/${Materials.pki}`;

    fs.unlink(filepath, (err) => {
      if (err) {
         if (err.code === 'ENOENT') {
            console.error('The file does not exist');
         } else {
            console.error(err.message);
         }
      } else {
         console.log('The file was deleted');
      }
   });

    res.status(200).json({msg: "Pki deleted success"});

  }catch(error){

    console.log(error.message)

  }

})

router.delete("/sert/:id", async (req, res) => {

  const Materials = await materials.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!Materials) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserveroriginal/Сертификаты/${Materials.sertificate}`;

    fs.unlink(filepath, (err) => {
      if (err) {
         if (err.code === 'ENOENT') {
            console.error('The file does not exist');
         } else {
            console.error(err.message);
         }
      } else {
         console.log('The file was deleted');
      }
   });

    res.status(200).json({msg: "Sertificate deleted success"});

  }catch(error){

    console.log(error.message)

  }

})

module.exports = router;