<template>
  <div>
    <Loader v-if="showLoading" />

    <RegistrationSuccess v-else-if="showSuccess" @restart-page="restartValues" />

    <template v-else>
      <div class="pb-16" v-if="errorMessage">
        <Alert type="error">
          {{ errorMessage }}
        </Alert>
      </div>

      <Stepper
        :steps="stepComponents"
        :handleConfirmAction="confirmAction"
        @new-error-message="updateErrorMessage"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Stepper from './components/utils/Stepper.vue';
import WelcomePage from './components/Pages/WelcomePage.vue';
import Password from './components/Pages/Password.vue';
import ReviewInfos from './components/Pages/ReviewInfos.vue';
import Person from './components/Pages/Person.vue';
import RegisterValidator from './helpers/validators/RegisterValidator';
import RegistrationGateway from './gateways/RegistrationGateway';
import Alert from './components/utils/Alert.vue';
import Loader from './components/utils/Loader.vue';
import RegistrationSuccess from './components/Pages/RegistrationSuccess.vue';

// Reactive state
const errorMessage = ref('');
const showLoading = ref(false);
const showSuccess = ref(false);

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

// Functions
const restartValues = () => {
  Object.assign(sharedState, initialState);
  showSuccess.value = false;
  errorMessage.value = '';
};

// Stepper components
const welcomeComponent = {
  component: WelcomePage,
  props: { sharedState },
  handleStepChange: () => RegisterValidator.validateFieldsWelcomePage(sharedState),
};

const personComponent = {
  component: Person,
  props: { sharedState },
  ref: ref(null),
  handleStepChange: () => RegisterValidator.validateFieldsPerson(sharedState),
};

const passwordComponent = {
  component: Password,
  props: { sharedState },
  handleStepChange: () => RegisterValidator.validateFieldsPassword(sharedState),
};

const reviewInfosComponent = {
  component: ReviewInfos,
  props: { sharedState },
};

const stepComponents = [
  welcomeComponent,
  personComponent,
  passwordComponent,
  reviewInfosComponent,
];

// Error message handler
const updateErrorMessage = (message) => {
  errorMessage.value = message;
};

// Confirmation action
const confirmAction = async () => {
  if (RegisterValidator.validateAllPages(sharedState)) {
    showLoading.value = true;
    try {
      const response = await RegistrationGateway.register(sharedState);
      const jsonResponse = await response.json();
      
      if (response.ok) {
        showSuccess.value = true;
      } else {
        updateErrorMessage(jsonResponse.message || 'Erro desconhecido ao realizar cadastro');
      }
    } catch (error) {
      updateErrorMessage('Erro desconhecido ao realizar cadastro');
    } finally {
      showLoading.value = false;
    }
  }
};
</script>
