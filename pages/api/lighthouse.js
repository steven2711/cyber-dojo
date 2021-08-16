const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url, email } = JSON.parse(req.body);

    console.log(url, email);

    const msg = {
      to: "steven@cyberdojo.co", // Change to your recipient
      from: "audit@cyberdojo.co", // Change to your verified sender
      subject: "Cyber Dojo | Basic Website Audit",
      text: `URL: ${url},
      Email: ${body.email}`,
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
    res.json({ msg: "Request method not allowed!" });
  }
}
