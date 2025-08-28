const DataHandling = require('../module/data');
const User = require('../module/loginSchema');


exports.clientRouter1 = (req, res) => {
  DataHandling.find().then((DATA) => {
    res.render('clientside', { Data: DATA, isLoggedIn: req.isLoggedIn ,role: req.session.user ? req.session.user.role : false});
  });
};

exports.clientRouter2 = (req, res) => {
  
  const { title, location, rent, type, description } = req.body;
  if (!req.file) {
    return res.status(400).send('No file uploaded or invalid file type');
  }
  
  
  const link = req.file ? req.file.filename : null;
  
  const Data = new DataHandling({
    title,
    location,
    rent,
    type,
    link,
    description,
  });
  Data.save().then(() => {
    console.log('successfully');
  });
  res.redirect('/client');
};

exports.favouritList1 = (req, res) => {
  const { _id } = req.body;
  const userId = req.session.user._id;

  User.findById(userId)
    .then(user => {
      if (!user) return res.redirect('/favourit');

      if (!user.favourit.includes(_id)) {
        user.favourit.push(_id);
      }

      user.save().then(updatedUser => {
        req.session.user = updatedUser; // keep session in sync
        res.redirect('/favourit');
      })
      .catch(err => {
        console.error(err);
        res.redirect('/favourit');
      });;
    })
    
};

exports.favouritList2 = (req, res) => {
  const fav = req.session.user.favourit;
  console.log(fav);
  DataHandling.find({ _id: { $in: fav } }).then((Data) => {
    
    res.render('favourit', { Data: Data, isLoggedIn: req.isLoggedIn ,role: req.session.user ? req.session.user.role : false});
  });
};

exports.bookingPost = (req, res) => {
  res.render('booking', { isLoggedIn: req.isLoggedIn,role: req.session.user ? req.session.user.role : false });
};

exports.userListControlar = (req, res) => {
  DataHandling.find().then((DATA) => {
    res.render('postList', { Data: DATA, isLoggedIn: req.isLoggedIn,role: req.session.user ? req.session.user.role : false });
  });
};

exports.postDetail = (req, res) => {
  const id = req.params.id;

  DataHandling.findById(id)
    .then((DATA) => {
      res.render('detail', { item: DATA, isLoggedIn: req.isLoggedIn,role: req.session.user ? req.session.user.role : false });
    })
    .catch(() => {
      res.redirect('/userList');
    });
};

exports.removeControlar = (req, res) => {
  const { id } = req.params;
  const userId = req.session.user._id;

  User.findById(userId)
    .then(user => {
      if (!user) return res.redirect('/favourit');

      user.favourit = user.favourit.filter(item => item.toString() !== id);
      user.save().then(updatedUser => {
        req.session.user = updatedUser; // update session after removing
        res.redirect('/favourit');
      })
      .catch(err => {
        console.error(err);
        res.redirect('/favourit');
      });
       
})
};