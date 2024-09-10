const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path")

global.__basedir = __dirname + "/..";

app.use(express.json());
app.use(cors());

const db = require("./models");

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

const clientRouter = require("./routes/Clients")
app.use("/clients", clientRouter)

const clientEditorRouter = require("./routes/ClientsEditor")
app.use("/shdclientsqdt", clientEditorRouter)

const clientsOtk = require("./routes/ClientsOtk")
app.use("/clientsotk", clientsOtk)

const clientsTester = require("./routes/ClientsTester")
app.use("/clientstester", clientsTester)

const goodsRouter = require("./routes/Goods")
app.use("/goods", goodsRouter)

const goodsTesterRouter = require("./routes/GoodsTester")
app.use("/goodstester", goodsTesterRouter)

const controlsRouter = require("./routes/Controls")
app.use("/controlo", controlsRouter)

const controlsTesterRouter = require("./routes/Controls")
app.use("/controlotester", controlsTesterRouter)

const materialsRouter = require("./routes/Materials")
app.use("/materials", materialsRouter)

const materialstesterRouter = require("./routes/Materialstester")
app.use("/materialstester", materialstesterRouter)

const usersRouter = require("./routes/Users")
app.use("/auth", usersRouter)

/*const updateMat = require("./routes/Updatemat")
app.use("/updatemat", updateMat)*/



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        //console.log("Server run");
    });
});