export const removeDash = (phrase) => {
  const dash = /\-/g;

  let removedDash = phrase.replace(dash, " ");

  return removedDash;
};
