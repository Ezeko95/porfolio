import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { form } = req.body;
      console.log(form, "this is the form");

      const mailOptions = {
        from: form.email,
        to: "ciangianluca@hotmail.com",
        subject: "Portfolio Subscriber!",
        text: `New email subscriber:\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nWebsite: ${form.website}\nHappy: ${form.happy}`,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email API" });
    }
  } else {
    res.status(405).end();
  }
}
