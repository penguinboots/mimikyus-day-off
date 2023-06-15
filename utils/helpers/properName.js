export function properName(str) {
  const replaced = str.replace(/-/g, ' ').toLowerCase();
  const capitalized = replaced.replace(/(^|\s)\S/g, (match) => match.toUpperCase());
  return capitalized;
}