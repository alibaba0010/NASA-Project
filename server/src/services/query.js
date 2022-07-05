const defaultPageNumber = 1;
const defaultPageLimit = 0;
function getPagination(query) {
  const page = Math.abs(query.page) || defaultPageNumber;
  const limit = Math.abs(query.limit) || defaultPageLimit;
  const skip = (page - 1) * limit;
  return {
    skip,
    limit,
  };
}
module.exports = getPagination;
