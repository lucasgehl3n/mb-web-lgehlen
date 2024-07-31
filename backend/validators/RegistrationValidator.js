const { cpf, cnpj } = require('cpf-cnpj-validator');
const isValidDate = require('../helpers/isValidDate');
class RegistrationValidator {
    constructor() {
    }

    static validate(data) {
        let dataValidation = {
            error: false,
            message: '',
        };

        if (!data.email) {
            dataValidation.error = true;
            dataValidation.message = 'Email é obrigatório';
        }

        if (!data.password) {
            dataValidation.error = true;
            dataValidation.message = 'Senha é obrigatória';
        }

        if (!data.typePersonSelected) {
            dataValidation.error = true;
            dataValidation.message = 'Tipo de pessoa é obrigatório';
        }

        if (data.typePersonSelected === 'pj') {
            dataValidation = this.validateLegalPerson(data.person);
            if (dataValidation.error) {
                return dataValidation;
            }
        }

        if (data.typePersonSelected === 'pf') {
            dataValidation = this.validatePhysicalPerson(data.person);
            if (dataValidation.error) {
                return dataValidation;
            }
        }

        return dataValidation;
    }

    static validateLegalPerson(data) {
        let dataValidation = {
            error: false,
            message: '',
        };

        if (!data.legalPerson) {
            dataValidation.error = true;
            dataValidation.message = 'Pessoa jurídica é obrigatória';
        }

        if (!data.document) {
            dataValidation.error = true;
            dataValidation.message = 'CNPJ é obrigatório';
        }

        if (!cnpj.isValid(data.document)) {
            dataValidation.error = true;
            dataValidation.message = 'CNPJ inválido';
        }

        if (!data.name) {
            dataValidation.error = true;
            dataValidation.message = 'Razão social é obrigatória';
        }

        if (!isValidDate(data.dateBirth)) {
            dataValidation.error = true;
            dataValidation.message = 'Data inválida!';
            return dataValidation;
        }

        return dataValidation;
    }

    static validatePhysicalPerson(data) {
        let dataValidation = {
            error: false,
            message: '',
        };

        if (!data.name) {
            dataValidation.error = true;
            dataValidation.message = 'Nome é obrigatório';
        }

        if (!data.document) {
            dataValidation.error = true;
            dataValidation.message = 'CPF é obrigatório';
        }

        if (!cpf.isValid(data.document)) {
            dataValidation.error = true;
            dataValidation.message = 'CPF inválido';
        }

        if (!isValidDate(data.dateBirth)) {
            dataValidation.error = true;
            dataValidation.message = 'Data inválida!';
            return dataValidation;
        }

        return dataValidation;
    }
}

module.exports = RegistrationValidator;