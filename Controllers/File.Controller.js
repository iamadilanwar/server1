const API_URL = process.env.API_URL;

module.exports = {
  uploadFile: async (req, res, next) => {
    try {
      const uploadedFile = req.file;
      const host = req.host;

      if (uploadedFile === null || uploadedFile === undefined) {
        return res
          .json({
            error: true,
            msg: "Image upload failed, image not found",
          })
          .status(400);
      }
      const imageUrl = uploadedFile.path;
      const filePath = req.protocol + "://" + host + "/" + req.file.path;
      res.json({
        error: false,
        msg: "OK",
        url: { base: API_URL, path: imageUrl, filePath: filePath },
      });
    } catch (error) {
      console.log("whbfhiwevhwevhwe");
      console.log(error);
    }
  },
};
