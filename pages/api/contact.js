// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Email built with SendGrid

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    if (body.subject === "") {
      body.subject = "General Question";
    }

    const msg = {
      to: "steven@cyberdojo.co", // Change to your recipient
      from: "contact@cyberdojo.co", // Change to your verified sender
      subject: body.subject,
      text: `This is ${body.name},
                 
                  ${body.message}
                 
            Email: ${body.email}
            Phone: ${body.phone}`,
    };

    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ message: "Successful" });
      })
      .catch((error) => {
        console.log(error);
        res.json({ error: "Oops, check the console for error." });
      });
  } else {
    res
      .status(405)
      .json({ message: "The method you are using is not allowed." });
  }
}
