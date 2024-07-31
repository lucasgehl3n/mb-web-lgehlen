const RegistrationValidator = require("../validators/RegistrationValidator");

class RegistrationController {
    static async register(req, res) {
        const data = req.body;
        const validation = RegistrationValidator.validate(data);
        if (validation.error) {
            return res.status(400).json(validation).send();
        }
        res.status(200).json({ message: "Registration successful" }).send();
    }
}

module.exports = RegistrationController;
