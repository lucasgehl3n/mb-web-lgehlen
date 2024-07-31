import GenericValidator from './GenericValidator';
export default class RegisterValidator {
    static validateFieldsWelcomePage = (sharedState) => {
        let validation = {
            error: false,
            message: '',
        };

        if (!GenericValidator.isRequired(sharedState.email)) {
            validation.error = true;
            validation.message = 'E-mail é obrigatório';
            return validation;
        };

        if (!GenericValidator.isValidEmail(sharedState.email)) {
            validation.error = true;
            validation.message = 'E-mail é inválido';
            return validation;
        };

        return validation;
    };

    static validateFieldsPerson(sharedState) {
        if (sharedState.typePersonSelected === 'pf') {
            return this.validateFieldsPhysicalPersonPage(sharedState);
        } else {
            return this.validateFieldsLegalPersonPage(sharedState);
        }
    }

    static validateFieldsLegalPersonPage(sharedState) {
        let validation = {
            error: false,
            message: '',
        };

        for (const key in sharedState.legalPerson) {
            if (!GenericValidator.isRequired(sharedState.legalPerson[key])) {
                const fieldsDictionary = {
                    name: 'Razão Social',
                    document: 'CNPJ',
                    dateBirth: 'Data de abertura',
                    phone: 'Telefone',
                };

                if (fieldsDictionary[key]) {
                    validation.error = true;
                    validation.message = `${fieldsDictionary[key]} é obrigatório`;
                    return validation;
                }
            }
        }
        return validation;
    };

    static validateFieldsPhysicalPersonPage(sharedState) {
        let validation = {
            error: false,
            message: '',
        };

        for (const key in sharedState.physicalPerson) {
            if (!GenericValidator.isRequired(sharedState.physicalPerson[key])) {
                const fieldsDictionary = {
                    name: 'Nome',
                    document: 'CPF',
                    dateBirth: 'Data de nascimento',
                    phone: 'Telefone',
                };

                if (fieldsDictionary[key]) {
                    validation.error = true;
                    validation.message = `${fieldsDictionary[key]} é obrigatório`;
                    return validation;
                }
            }
        }
        return validation;
    };

    static validateFieldsPassword(sharedState) {
        let validation = {
            error: false,
            message: '',
        };

        if (!GenericValidator.isRequired(sharedState.password)) {
            validation.error = true;
            validation.message = 'Senha é obrigatória!';
            return validation;
        }
        return validation;
    }

    static validateAllPages(sharedState) {
        if (!RegisterValidator.validateFieldsWelcomePage(sharedState)) {
            return false;
        }

        if (!RegisterValidator.validateFieldsPerson(sharedState)) {
            return false;
        }

        if (!RegisterValidator.validateFieldsPassword(sharedState)) {
            return false;
        }

        return true;
    }
}