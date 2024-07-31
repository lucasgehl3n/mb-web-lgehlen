export default class GenericValidator {
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static isRequired(value) {
        return value && value.trim() !== '';
    }
}

