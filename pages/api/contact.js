// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Email built with SendGrid

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
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

    try {
      const data = await sgMail.send(msg);

      return res.status(200).json({ message: "Successfully sent client form" });
    } catch (error) {
      console.error(error);
      return res.json({ message: "Failure in contact route." });
    }
  } else {
    res
      .status(405)
      .json({ message: "The method you are using is not allowed." });
  }
}
