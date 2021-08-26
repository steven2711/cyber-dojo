const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const {
      name,
      email,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
      question11,
    } = body;

    const form = `
    
    Name: ${name}
    Email: ${email}

    Client Questionarrie

    1. What does your business do? Sell products/services?

    ${question1}

    2. Who is your target market/audience?

    ${question2}

    3. What is your main goal for a website visitor? To place an order, request a consultation, get their email, etc

    ${question3}

    4. How much is an average client worth to your business? What is the average sales price of a product?

    ${question4}

    5. Do you have a budget set aside for this project? If so, how much?

    ${question5}

    6. How do you typically get/acquire new clients?

    ${question6}

    7. How many clients do you get on average per month? How many products do you sale on average per month?

    ${question7}

    8. Do you have professional images and a brand identity?

    ${question8}

    9. When would you like the project completed by?

    ${question9}

    10. When would you like the project completed by?

    ${question10}

    11. Do you have any questions for me?

    ${question11}

    `;

    const msg = {
      to: "steven@cyberdojo.co", // Change to your recipient
      from: "questionairre@cyberdojo.co", // Change to your verified sender
      subject: "Cyber Dojo | Client Questionnaire",
      text: form,
    };

    try {
      const data = await sgMail.send(msg);

      return res.status(200).json({ message: "Successfully sent client form" });
    } catch (error) {
      console.error(error);
      return res.json({ message: "Failure in get started route" });
    }
  } else {
    return res
      .status(405)
      .json({ message: "The method you are using is not allowed." });
  }
}
