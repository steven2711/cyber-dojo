const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const info = JSON.parse(req.body);

    const msg = {
      to: "steven@cyberdojo.co", // Change to your recipient
      from: "audit@cyberdojo.co", // Change to your verified sender
      subject: "Cyber Dojo | Basic Website Audit",
      html: `<p>URL: ${info.url}</p>
        <p>Email: ${info.email}</p>`,
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
