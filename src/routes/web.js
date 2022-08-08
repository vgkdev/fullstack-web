import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  // router.get("/vgk", (req, res) => {
  //   return res.send("hello world vgk");
  // });
  //rest api

  return app.use("/", router);
};

module.exports = initWebRoutes;
