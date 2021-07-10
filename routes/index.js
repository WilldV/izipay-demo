const Router = require("express").Router();
const ctrl = require("../controllers");

Router.post("/get-from-token", ctrl.tokenForm);

Router.post("/pay", ctrl.pay);

module.exports = Router;