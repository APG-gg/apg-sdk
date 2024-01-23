const titleCase = (str: string) => {
  const lower = str.toLowerCase();
  return lower.replace(/(^| )(\w)/g, (x) => x.toUpperCase());
}

export default titleCase;