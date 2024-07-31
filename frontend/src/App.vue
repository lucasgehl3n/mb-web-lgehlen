<template>
  <div>
    <Loader v-if="showLoading"></Loader>
    
    <RegistrationSuccess v-else-if="showSucess" @restart-page="restartValues"/>

    <template v-else>
      <div class="pb-16" v-if="messageError">
        <Alert :type="'error'">
          {{ messageError }}
        </Alert>
      </div>

      <Stepper :steps="stepComponents" :handleConfirmAction="confirmAction" @new-error-message="updateErrorMessage" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Stepper from './components/utils/Stepper.vue';
import WelcomePage from './components/Pages/WelcomePage.vue';
import Password from './components/Pages/Password.vue';
import ReviewInfos from './components/Pages/ReviewInfos.vue';
import { reactive } from 'vue';
import Person from './components/Pages/Person.vue';
import RegisterValidator from './helpers/validators/RegisterValidator';
import RegistrationGateway from './gateways/RegistrationGateway';
import Alert from './components/utils/Alert.vue';
import Loader from './components/utils/Loader.vue';
import RegistrationSuccess from './components/Pages/RegistrationSuccess.vue';

const messageError = ref('');
const showLoading = ref(false);
const showSucess = ref(false);

const initialState = {
  email: '',
  typePersonSelected: 'pf',
  legalPerson: {
    name: '',
    document: '',
    dateBirth: '',
    phone: '',
  },
  physicalPerson: {
    name: '',
    document: '',
    phone: '',
    dateBirth: '',
  },
  password: '',
};

const sharedState = reactive({ ...initialState });

const restartValues = () => {
  Object.assign(sharedState, initialState);
  showSucess.value = false;
  messageError.value = '';
}

const welcomeComponent = {
  component: WelcomePage,
  props: {
    sharedState,
  },
  handleStepChange: () => RegisterValidator.validateFieldsWelcomePage(sharedState),
};


const personRef = ref(null);
const personComponent = ({
  component: Person,
  props: {
    sharedState,
  },
  ref: personRef,
  handleStepChange: () => RegisterValidator.validateFieldsPerson(sharedState)
});

const passwordComponent = {
  component: Password,
  props: {
    sharedState,
  },
  handleStepChange: () => RegisterValidator.validateFieldsPassword(sharedState)
};

const reviewInfosComponent = {
  component: ReviewInfos,
  props: {
    sharedState,
  },
};

const stepComponents = [
  welcomeComponent,
  personComponent,
  passwordComponent,
  reviewInfosComponent
];

const updateErrorMessage = (message) => {
  messageError.value = message;
};

const confirmAction = async () => {
  if (RegisterValidator.validateAllPages(sharedState)) {
    showLoading.value = true;
    const response = await RegistrationGateway.register(sharedState);
    const jsonResponse = await response.json();
    showLoading.value = false;
    if (response.status === 200) {
      showSucess.value = true;
    } else if(response.status === 400) {
      updateErrorMessage(jsonResponse.message);
    }
    else{
      updateErrorMessage('Erro desconhecido ao realizar cadastro');
    }
  }
};
</script>