export const isEmpty = (string) => {
  if (string.replace(/ /g, "").length == 0) return true;
  return false;
};
