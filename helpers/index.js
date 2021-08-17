export const removeDash = (phrase) => {
  const dash = /\-/g;

  let removedDash = phrase.replace(dash, " ");

  return removedDash;
};

export const urlValidationAndFix = (url) => {
  // Looking for a google.com format. Basically no protocols. Check for extension.

  let newUrl = url;

  if (url.includes("https://")) {
    newUrl = url.slice(8);
  } else if (url.includes("http://")) {
    newUrl = url.slice(7);
  }

  if (newUrl.includes(".")) {
    console.log(newUrl);
    return newUrl;
  } else {
    console.log(newUrl);
    return false;
  }
};
