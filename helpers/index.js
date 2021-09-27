export const removeDash = (phrase) => {
  const dash = /\-/g;

  let removedDash = phrase.replace(dash, " ");

  return removedDash;
};

export const urlTrim = (url) => {
  // Looking for a google.com format. Basically no protocols. Check for extension.

  let trimmedUrl = url;

  // Trim protocol

  if (url.includes("https://")) {
    trimmedUrl = url.slice(8);
  } else if (url.includes("http://")) {
    trimmedUrl = url.slice(7);
  }

  //Remove trailing slash
  if (trimmedUrl.includes("/")) {
    trimmedUrl = trimmedUrl.replace("/", " ");
  }

  console.log(trimmedUrl);

  return trimmedUrl;
};

export const sendLighthouseEmail = async (info) => {
  try {
    const res = await fetch(`https://www.cyberdojo.co/api/lighthouse`, {
      method: "POST",
      body: JSON.stringify(info),
    });

    if (res.ok) {
      console.log("Message sent!");
    }
  } catch (error) {
    console.log(error);
  }
};
