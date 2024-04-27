const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "BACKND ERROR"
    const extraDetails = err.extraDetails || "ERROE FROM BACKEND"

    return res.status(status).json({message, extraDetails});
};

module.exports = errorMiddleware;