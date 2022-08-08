import db from "../models/index";

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

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
