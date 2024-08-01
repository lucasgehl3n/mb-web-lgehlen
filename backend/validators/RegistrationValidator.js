const { cpf, cnpj } = require('cpf-cnpj-validator');
const isValidDate = require('../helpers/isValidDate');

const PERSON_TYPE = {
    PHYSICAL: 'pf',
    LEGAL: 'pj'
};

const ERROR_MESSAGES = {
    EMAIL_REQUIRED: 'Email é obrigatório',
    PASSWORD_REQUIRED: 'Senha é obrigatória',
    PERSON_TYPE_REQUIRED: 'Tipo de pessoa é obrigatório',
    CNPJ_REQUIRED: 'CNPJ é obrigatório',
    INVALID_CNPJ: 'CNPJ inválido',
    PERSON_REQUIRED: 'Dados de pessoa é obrigatório',
    LEGAL_NAME_REQUIRED: 'Razão social é obrigatória',
    NAME_REQUIRED: 'Nome é obrigatório',
    CPF_REQUIRED: 'CPF é obrigatório',
    INVALID_CPF: 'CPF inválido',
    INVALID_DATE: 'Data inválida!',
};


class RegistrationValidator {
    constructor() { }

    /**
     * Validate registration data
     * @param {Object} data - Registration data
     * @returns {Object} Validation result
     */
    static validate(data) {
        let dataValidation = this.checkRequiredFields(data);
        if (dataValidation.error) {
            return dataValidation;
        }

        if(!data.person){
            return this.validationError(ERROR_MESSAGES.PERSON_REQUIRED);
        }

        if (data.typePersonSelected === PERSON_TYPE.LEGAL) {
            return this.validateLegalPerson(data.person);
        }

        if (data.typePersonSelected === PERSON_TYPE.PHYSICAL) {
            return this.validatePhysicalPerson(data.person);
        }

        return dataValidation;
    }

    /**
     * Verify required fields
     * @param {Object} data - Registration data
     * @returns {Object} Validation result
     */
    static checkRequiredFields(data) {
        if (!data.email) {
            return this.validationError(ERROR_MESSAGES.EMAIL_REQUIRED);
        }

        if (!data.password) {
            return this.validationError(ERROR_MESSAGES.PASSWORD_REQUIRED);
        }

        if (!data.typePersonSelected) {
            return this.validationError(ERROR_MESSAGES.PERSON_TYPE_REQUIRED);
        }

        return { error: false, message: '' };
    }

    /**
     * Validation of legal person data
     * @param {Object} data - Legal person data
     * @returns {Object} Validation result
     */
    static validateLegalPerson(data) {
        if (!data.document) {
            return this.validationError(ERROR_MESSAGES.CNPJ_REQUIRED);
        }

        if (!cnpj.isValid(data.document)) {
            return this.validationError(ERROR_MESSAGES.INVALID_CNPJ);
        }

        if (!data.name) {
            return this.validationError(ERROR_MESSAGES.LEGAL_NAME_REQUIRED);
        }

        if (!isValidDate(data.dateBirth)) {
            return this.validationError(ERROR_MESSAGES.INVALID_DATE);
        }

        return { error: false, message: '' };
    }

    /**
     * Validation of physical person data
     * @param {Object} data - Physical person
     * @returns {Object} Validation result
     */
    static validatePhysicalPerson(data) {
        if (!data.name) {
            return this.validationError(ERROR_MESSAGES.NAME_REQUIRED);
        }

        if (!data.document) {
            return this.validationError(ERROR_MESSAGES.CPF_REQUIRED);
        }

        if (!cpf.isValid(data.document)) {
            return this.validationError(ERROR_MESSAGES.INVALID_CPF);
        }

        if (!isValidDate(data.dateBirth)) {
            return this.validationError(ERROR_MESSAGES.INVALID_DATE);
        }

        return { error: false, message: '' };
    }

    /**
     * Create a validation error object
     * @param {string} message - Error message
     * @returns {Object} Validation error object
     */
    static validationError(message) {
        return { error: true, message };
    }
}

module.exports = RegistrationValidator;
