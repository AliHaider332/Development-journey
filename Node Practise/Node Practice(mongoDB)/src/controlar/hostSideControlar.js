const fs = require('fs');
const path = require('path');
const DataHandling = require('../module/data');
exports.serverRouter = (req, res) => {
  res.render('serverSide', {
    isLoggedIn: req.isLoggedIn,
    role: req.session.user ? req.session.user.role : false,
  });
};

exports.hostList = (req, res) => {
  DataHandling.find().then((DATA) => {
    res.render('../host/hostPostList', {
      Data: DATA,
      isLoggedIn: req.isLoggedIn,
      role: req.session.user ? req.session.user.role : false,
    });
  });
};

exports.editControlar = (req, res) => {
  const id = req.params.id;

  DataHandling.findById(id)
    .then((DATA) => {
      res.render('../host/edit', {
        Data: DATA,
        isLoggedIn: req.isLoggedIn,
        role: req.session.user ? req.session.user.role : false,
      });
    })
    .catch((err) => {
      console.log('Error in fetching:', err);
    });
};

exports.updatePost = (req, res) => {
  const { _id, title, location, rent, type, description } = req.body;
  let link = req.file ? req.file.filename : null;

  DataHandling.findById(_id).then((data) => {
    if (!data) {
      console.log('Id not exist');
      return res.status(404).send('Post not found');
    }

    // Update fields
    data.title = title;
    data.location = location;
    data.rent = rent;
    data.type = type;
    data.description = description;

    if (link) {
      // Build safe absolute path to old image
      const oldImagePath = path.join(__dirname, '..', 'uploads', data.link);

      if (data.link && fs.existsSync(oldImagePath)) {
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error('Error deleting old image:', err);
          } else {
            console.log('Old image deleted successfully');
          }
        });
      }

      data.link = link;
    }

    data
      .save()
      .then((result) => {
        if (result) {
          console.log('Update Successfully');
          res.redirect('/Host-Post-List');
        }
      })
      .catch((err) => {
        console.error('Error updating post:', err);
        res.status(500).send('Error updating post');
      });
  });
};

exports.deleteControlar = (req, res) => {
  const id = req.params.id;
  DataHandling.findByIdAndDelete(id).then((data) => {
    console.log(data);
    if(data.link){
      const imagePath = path.join(__dirname, '..', 'uploads', data.link);
      if (fs.existsSync(imagePath)) {
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error('Error deleting image:', err);
          } else {
            console.log('Image deleted successfully');
          }
        });
      }

    }
    
    res.redirect('/Host-Post-List');
  });
};
