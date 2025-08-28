exports.throw404 = (req, res) => {
  res
    .status(404)
    .render('404', {
      isLoggedIn: req.isLoggedIn,
      role: req.session.user ? req.session.user.role : false,
    });
};
