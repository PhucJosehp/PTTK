const tourService = require("../services/tour.services");

exports.getAllTour = async (req, res, next) => {
  const data = {};

  tourService.viewAllTour(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
