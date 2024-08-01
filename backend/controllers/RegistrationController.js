const RegistrationValidator = require("../validators/RegistrationValidator");

class RegistrationController {
    /**
     * Register a new user
     * @param {Request} req - The request object containing the user's registration data.
     * @param {Response} res - The response object for sending feedback to the client.
     * @param {Function} next - The next middleware function in the stack for error handling.
     */
    static async register(req, res, next) {
        const data = req.body;
        const validation = RegistrationValidator.validate(data);

        if (validation.error) {
            console.error("Validation Error: ", validation.message); 
            return res.status(400).json(validation); 
        }

        res.status(200).json({ message: "Cadastrado com sucesso!" });
    }
}

module.exports = RegistrationController;
