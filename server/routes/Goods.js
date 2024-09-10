const express = require("express");
const router = express.Router();
const { Goods } = require("../models");
const { Controls } = require("../models");
//const {validateToken} = require("../middlewares/AuthMiddleware")
const fs = require("fs");

const brands = require("../controllers/brands");

router.get("/:clientId", async (req, res) => { //ALL GOODS CONCRET CLIENT
  const clientId = req.params.clientId;
  const goods = await Goods.findAll({ where: { ClientId: clientId } });
  res.json(goods);
});

router.get("/byGoodId/:id", async (req, res) => {//ALL GOODS CONCRET CLIENTA

  const id = req.params.id
  const good = await Goods.findByPk(id)
  res.json(good)

})

router.get("/:id", async (req, res) => {//ONE GOOD
    
  const respon = await Goods.findOne({
      where: {
          id: req.params.id,
      },
  });
  res.json(respon)

})

router.post("/", async (req, res) => {
  const good = req.body;
  await Goods.create(good);
  res.json(good);
})

router.patch('/he/:id',brands.upload,brands.updateBrands);
router.patch('/hy/:id',brands.upload2,brands.updateBrands2);

router.patch('/updateuzk/:id',brands.upload3,brands.updateBrands3);
router.patch('/updatergd/:id',brands.upload4,brands.updateBrands4);
router.patch('/updateotherdocs/:id',brands.upload5,brands.updateBrands5);
router.patch('/updatevik/:id',brands.upload6,brands.updateBrands6);
router.patch('/updatetechsol/:id',brands.upload7,brands.updateBrands7);
router.patch('/updatevsrnm/:id',brands.upload8,brands.updateBrands8);
router.patch('/updatereppas/:id',brands.upload9,brands.updateBrands9);



router.patch('/he2/:id',brands.upload12,brands.updateBrands12);
router.patch('/hy2/:id',brands.upload13,brands.updateBrands13);

router.patch('/updateuzk2/:id',brands.upload14,brands.updateBrands14);
router.patch('/updatergd2/:id',brands.upload15,brands.updateBrands15);
router.patch('/updateotherdocs2/:id',brands.upload16,brands.updateBrands16);
router.patch('/updatevik2/:id',brands.upload17,brands.updateBrands17);
router.patch('/updatetechsol2/:id',brands.upload18,brands.updateBrands18);
router.patch('/updatevsrnm2/:id',brands.upload19,brands.updateBrands19);
router.patch('/updatereppas2/:id',brands.upload20,brands.updateBrands20);

//router.patch('/directionlinkupdate/:id',brands.upload10,brands.updateBrands10);
//router.patch('/opinionlinkupdate/:id',brands.upload11,brands.updateBrands11);

/*router.patch("/:id", async (req, res) => {

  try{

      await Goods.update(req.body, {
          where: {
              id: req.params.id,
          },
      });

      res.status(200).json({Message: "Client update successfull"})

  }catch(error){

      //console.log(error)

  }

})*/

/*router.delete("/:goodId", async (req, res) => {

const goodId = req.params.goodId;

await Goods.destroy({
  where: {
    id: goodId,
  },
});

res.json("DELETE SUCCESS")

});*/

router.delete("/:id", async (req, res) => {

  try{

      await Goods.destroy({
          where: {
              id: req.params.id,
          },
      });

      res.status(200).json({Message: "Good delete successfull"})

  }catch(error){

      //console.log(error)

  }

})

router.delete("/he/:id", async (req, res) => {

  const goods = await Goods.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!goods) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserveroriginal/Термообработка/${goods.heattreatment}`;

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

router.delete("/updateotherdocs/:id", async (req, res) => {

  const goods = await Goods.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!goods) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserveroriginal/Прочиедокументы/${goods.othersdocs}`;

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

router.delete("/updatetechsol/:id", async (req, res) => {

  const goods = await Goods.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!goods) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserveroriginal/Технологичеcкиерешения/${goods.technicalsolution}`;

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

router.delete("/updatevsrnm/:id", async (req, res) => {

  const goods = await Goods.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!goods) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserveroriginal/ВСНРМ/${goods.vsnrm}`;

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

router.delete("/updatereppas/:id", async (req, res) => {

  const goods = await Goods.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!goods) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserveroriginal/Отчётныйпасп/${goods.reportingpassport}`;

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

module.exports = router;