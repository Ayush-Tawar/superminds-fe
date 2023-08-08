export function getUrl(str) {
  let result = String(str.toLowerCase());
  result = result.replace(/\s/g, "-");
  return result;
}

export function parseUrl(str) {
  let result = String(str.toLowerCase());
  result = result.replace(/[-]/g, " ");
  return result;
}
