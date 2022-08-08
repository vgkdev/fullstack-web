let getHomePage = (req, res) => {
  //return res.send("home controller");
  return res.render("homepage.ejs");
  //ko cần đường dẫn vì đã config trong file viewEngine
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
