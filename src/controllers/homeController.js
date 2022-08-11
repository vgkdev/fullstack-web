import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  //return res.send("home controller");
  try {
    let data = await db.User.findAll();
    // console.log("----------------");
    // console.log(data);
    // console.log("----------------");

    return res.render("homepage.ejs", { data: JSON.stringify(data) });
    //ko cần đường dẫn vì đã config trong file viewEngine
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  //console.log(req.body);
  return res.send("post crud from server");
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
