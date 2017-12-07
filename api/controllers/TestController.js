module.exports = {
  'wr': (req, res) => {
    req.session.test = req.param('str');
    res.ok('ok');
  },
  'rd': (req, res) => {
    res.ok(req.session.test);
  }
};
