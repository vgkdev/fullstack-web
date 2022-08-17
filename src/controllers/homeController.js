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

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  // console.log("-----------------");
  // console.log(data);
  // console.log("--------------------");
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id; //id trong data User
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    //check data user not found

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("Users not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body; //tất cả các name trong input
  let allUsers = await CRUDService.updateUserData(data); //Users sau khi update
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};

let deleteCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    await CRUDService.deleteUserById(userId);
    return res.send("delete the user succeed");
  } else {
    return res.send("User not found");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
