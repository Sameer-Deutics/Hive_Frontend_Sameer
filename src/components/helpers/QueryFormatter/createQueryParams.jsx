const createQueryParams = (fields) => {
  if (!Array.isArray(fields) || fields.length === 0) {
    return "";
  }
  const query = fields.join(",");
  return `_fields=${query}`;
};

export default createQueryParams;
