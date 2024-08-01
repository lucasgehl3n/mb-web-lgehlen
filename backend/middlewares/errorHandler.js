/** *
 * This middleware function handles errors that occur during request processing
 *
 * @param {Error} err - The error object representing the error that occurred.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function in the stack.
 */
function errorHandler(err, req, res, next) {
    console.error(err.stack);

    res.status(500).json({
        error: true,
        message: 'Algo deu errado. Por favor, tente novamente.',
    });
}

module.exports = errorHandler;
