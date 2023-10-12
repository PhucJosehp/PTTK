const paymentService = require("../services/payment.services");

exports.getAllPayment = async (req, res, next) => {
  const data = {};

  paymentService.viewAllPayment(data, (error, results) => {
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
