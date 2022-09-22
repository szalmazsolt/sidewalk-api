module.exports = (req, res, next) => {
  console.log('render runs');
  console.log(res.locals.organizers);
  return res.json(res.locals.organizers);
};