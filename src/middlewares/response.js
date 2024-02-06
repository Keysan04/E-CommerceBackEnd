export const responder = {
  SUCCESS: ({ res, errorCode = 200, ...rest }) => {
    res.status(errorCode).json({
      status: "success",
      ...rest,
    });
  },
  ERROR: ({ res, message, errorCode = 200 }) => {
    res.status(errorCode).json({
      status: "error",
      message,
    });
  },
};
