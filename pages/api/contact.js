// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  // res.status(200).json({ message: "it works" });

  const msg = {
    to: "swatson.emu@gmail.com", // Change to your recipient
    from: req.body.email, // Change to your verified sender
    subject: req.body.subject,
    text: `This is ${req.body.name}, ${req.body.message}`,
  };
  sgMail
    .send(msg)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}
