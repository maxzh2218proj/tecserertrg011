const express = require("express");
const router = express.Router();
const { Controlstester } = require("../models");
//const {validateToken} = require("../middlewares/AuthMiddleware")
const fs = require("fs");

const brands = require("../controllers/brandstester");

router.get("/:goodId", async (req, res) => { //ALL GOODS CONCRET CLIENT
  const goodId = req.params.goodId;
  const controls = await Controlstester.findAll({ where: { GoodidTester: goodId } });
  res.json(controls);
});

router.get("/:id", async (req, res) => {//ONE GOOD
    
  const respon = await Controlstester.findOne({
      where: {
          id: req.params.id,
      },
  });
  res.json(respon)

})

router.post("/", async (req, res) => {
  const control = req.body;
  await Controlstester.create(control);
  res.json(control);
})

//router.patch('/:id', brands.upload, brands.updateBrands);

router.patch("/:id", async (req, res) => {

  try{

      await Controlstester.update(req.body, {
          where: {
              id: req.params.id,
          },
      });

      res.status(200).json({Message: "Client update successfull"})

  }catch(error){

      //console.log(error)

  }

})

router.patch('/directionlinkupdatetester/:id',brands.upload10,brands.updateBrands10);
router.patch('/opinionlinkupdatetester/:id',brands.upload11,brands.updateBrands11);

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

      await Controlstester.destroy({
          where: {
              id: req.params.id,
          },
      });

      res.status(200).json({Message: "Good delete successfull"})

  }catch(error){

      //console.log(error)

  }

})

router.delete("/directionlinkupdatetester/:id", async (req, res) => {

  const controls = await Controlstester.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!controls) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserver/Отчётныйпасп/${controls.reportingpassport}`;

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

router.delete("/opinionlinkupdatetester/:id", async (req, res) => {

  const controls = await Controlstester.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!controls) return res.status(404).json({msg: "No Data Found"});

  try{

    const filepath = `../client/build/Texserver/Отчётныйпасп/${controls.reportingpassport}`;

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