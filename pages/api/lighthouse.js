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

    try {
      const data = await sgMail.send(msg);
      return res.status(200).json({ message: "Successfully sent client form" });
    } catch (error) {
      console.error(error);
      return res.json({ message: "Failure in lighthouse route" });
    }
  } else {
    return res.json({ msg: "Request method not allowed!" });
  }
}
