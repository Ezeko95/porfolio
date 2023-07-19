import nodemailer from "nodemailer";
import bodyParser from "body-parser";
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default function handler(req, res) {
  console.log("arrived puto")
  if (req.method === "POST") {
    bodyParser.urlencoded({ extended: true })(req, res, () => {
      const { emailData } = req.body;
      // Email content
      const mailOptions = {
        from: process.env.EMAIL_ADDRESS, 
        to: "ciangianluca@hotmail.com", 
        subject: "Portfolio Subscriber!",
        text: `New email subscriber: ${emailData.email}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).json({ error: "Failed to send email API" });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "Email sent successfully" });
        }
      });
    });
  } else {
    res.status(405).end();
  }
}
