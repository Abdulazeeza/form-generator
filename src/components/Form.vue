<template>
    <!-- form section -->
    <form @submit.prevent="submit_form">
        <div class="form-group" v-for="input in selected_form.input" :key="input.id">
            <label>{{input.label}}</label>
            <input :type="input.type" class="form-control" v-model="computed_input[`${input.input_name}`]" required>
        </div>
        <button class="btn btn-success">Submit</button>
    </form>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Form",
    computed: {
        ...mapState({
            selected_form: state => state.form.selected_form
        }),
        computed_input () {  //get the form data on update
            let input_names = {}
            let name = null 
            for (let index = 0; index < this.selected_form.input.length; index++) {
                name = this.selected_form.input[index].input_name;
                input_names[`${name}`] = "";
            }
            return input_names;
        }
    },
    methods: {
        submit_form() { //submit form
            let submission = [];
           
            for (let index = 0; index < this.selected_form.input.length; index++) {
                let question = this.selected_form.input[index].label;
                let input_name = this.selected_form.input[index].input_name;
                let answer = this.computed_input[`${input_name}`];
                let data = {};
                data.question = question;
                data.answer = answer;
                submission.push(data);    
            }
            this.$store.commit("form/lastest_submission", submission);
            this.$store.commit("form/submitted_form", true);
        }
    }
}
</script>