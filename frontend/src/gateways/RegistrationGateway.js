export default class RegistrationGateway{
    static async register(sharedState){
        const person = sharedState.typePersonSelected === 'pj'
            ? sharedState.legalPerson
            :  sharedState.physicalPerson;

        const data = {
            email: sharedState.email,
            password: sharedState.password,
            typePersonSelected: sharedState.typePersonSelected,
            person,
        };

        const response = await fetch('/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    }
}
