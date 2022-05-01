const multer = require("multer");
const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

const singleUpload = (keyName) => multer({ storage: storage }).single(keyName);

module.exports = {
  singleUpload,
};
