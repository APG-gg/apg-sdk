function convertToHrefObject(link: string) {
  const [pathname, queryString] = link.split('?');
  const query: { [key: string]: string } = {};

  if (queryString) {
    queryString.split('&').forEach(param => {
      const [key, value] = param.split('=');
      query[key] = value;
    });
  }

  return {
    pathname,
    query,
  };
}

export default convertToHrefObject;