const successResponse = (res, message, data, status = 200) => {
  return res.status(status).json({
    status: status,
    message: message,
    data: data,
  });
};

const errorResponse = (res, message, status = 400) => {
  return res.status(status).json({
    status,
    message,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
