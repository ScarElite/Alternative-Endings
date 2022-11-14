const nodemailer = require("nodemailer");

// point to the template folder
const handlebarOptions = {
  viewEngine: {
      partialsDir: path.resolve('./views/'),
      defaultLayout: false,
  },
  viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))

function sendMail(email) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alternativeendings123@gmail.com",
      pass: "gtnaqlxjftvrmigq",
    },
  });
  let mailOptions = {
    from: '"Alternative Endings Welcome Team" <AlternativeEndings123@gmail.com>',
    to: email,
    subject: "New Signup",
    text: "Welcome to Alternative Endings!",
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error Occurs: ", err);
    } else {
      console.log("Email sent!", data);
    }
  });
}

module.exports = sendMail;
