const express = require("express")
const router = express.Router()
const {Clientstester} = require("../models");
const { where } = require("sequelize");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {//ALL CLIENTS

    const listOfClients = await Clientstester.findAll();
    res.json(listOfClients);

});

router.get("/byId/:id", async (req, res) => {//ALL GOODS CONCRET CLIENTA

    const id = req.params.id
    const client = await Clientstester.findByPk(id)
    res.json(client)

})

router.get("/:id", async (req, res) => {//ONE CLIENT
    
    const respon = await Clientstester.findOne({
        where: {
            id: req.params.id,
        },
    });
    res.json(respon)

})

router.post("/", validateToken, async (req, res) => {

    const client = req.body;
    const username = req.user.username
    client.username = username;
    //post.username = req.user.username
    //post.UserId = req.user.id
    await Clientstester.create(client)
    res.json(client)

})

/*router.patch("/:id", async (req, res) => {

    const client = req.body;
    //post.username = req.user.username
    //post.UserId = req.user.id
    await Clients.update(client, {
        where: {
            id: req.params.id
        }
    })
    res.json(client)

})*/

router.patch("/:id", async (req, res) => {

    try{

        await Clientstester.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json({Message: "Client update successfull"})

    }catch(error){

        //console.log(error)

    }

})

/*router.delete("/:clientId", async (req, res) => {

    const clientId = req.params.clientId
    await Clients.destroy({
        where: {
            id: clientId,
        },
    });

    res.json("DELETED SUCCESSFULLY");

})*/

router.delete("/:id", async (req, res) => {

    try{

        await Clientstester.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json({Message: "Client update successfull"})

    }catch(error){

        //console.log(error)

    }

})

module.exports = router;