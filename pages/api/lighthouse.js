const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const launchChromeAndRunLighthouse = async (url) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "html",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port,
  };
  const runnerResult = await lighthouse(url, options);
  const reportHtml = runnerResult.report;

  await chrome.kill();

  return reportHtml;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url, email } = JSON.parse(req.body);
    let results = await launchChromeAndRunLighthouse(url);

    res.send(results);

    // const msg = {
    //   to: "steven@cyberdojo.co", // Change to your recipient
    //   from: "audit@cyberdojo.co", // Change to your verified sender
    //   subject: "Cyber Dojo | Basic Website Audit",
    //   html: results,
    // };

    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     res.status(200).json({ message: "Successful" });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     res.json({ error: "Oops, check the console for error." });
    //   });
  } else {
    res.json({ msg: "Request method not allowed!" });
  }
}
