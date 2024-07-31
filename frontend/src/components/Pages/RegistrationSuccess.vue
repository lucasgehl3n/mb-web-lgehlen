<template>
    <img src="../../assets/svg/success-flag.svg" alt="Sucesso" class="img-success" />
    <div class="pb-16">
        <Alert :type="'success'">
            Cadastro realizado com sucesso!
        </Alert>
    </div>

    <div class="pb-16">
        <StyledButton :type="'primary'" :handle-click-action="emitRestartPage" :text="'Voltar para a página inicial'">
        </StyledButton>
    </div>
</template>

<script setup>
import Alert from '../utils/Alert.vue';
import StyledButton from '../utils/StyledButton.vue';
import { defineEmits } from 'vue';
const emits = defineEmits(['restart-page']);
const emitRestartPage = () => emits('restart-page');
</script>

<style scoped>
.img-success {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding-bottom: 32px;
}
</style>