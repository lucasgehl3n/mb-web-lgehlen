export default {
    beforeMount(el) {
        el.addEventListener('input', (event) => {
            let value = event.target.value.replace(/\D/g, '');

            if (value.length > 14) {
                value = value.substring(0, 14);
            }

            if (value.length > 12) {
                value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
            } else if (value.length > 8) {
                value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d*)$/, '$1.$2.$3/$4');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{3})(\d*)$/, '$1.$2.$3');
            } else {
                value = value.replace(/^(\d{2})(\d*)$/, '$1.$2');
            }

            event.target.value = value;
        });
    }
};
