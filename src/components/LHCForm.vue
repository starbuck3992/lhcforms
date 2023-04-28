<template>
    <div style="display: grid; grid-template-columns: 1fr 1fr">
        <div>
            <div id="formContainer">
            </div>
        </div>
        <select v-model="selected" style="max-height: 50px" @change="switchFormData">
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>

<script>
import data from "../data/index.js";

export default {
    data() {
        return {
            options: [
                {text: 'Záznam odborného vyšetrenia', value: 'zaznamOdbornehoVysetrenia'},
                {text: 'Záznam zobrazovacieho vyšetrenia', value: 'zaznamZobrazovacieVysetrenie'},
                {text: 'Prepustacia správa', value: 'prepustaciSprava'},
                {text: 'Lieková anamnéza', value: 'liekovaAnamneza'}
            ],
            selected: 'zaznamOdbornehoVysetrenia'
        }
    },
    mounted() {
        this.$nextTick(function () {
            LForms.Util.addFormToPage(data[this.selected], 'formContainer');
        })
    },
    methods: {
        switchFormData: function () {
            LForms.Util.addFormToPage(data[this.selected], 'formContainer');
        }
    },
}
</script>
<style scoped>
</style>
