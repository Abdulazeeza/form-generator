<template>
  <div class="home">
      <div class="container">
        <!-- header -->
        <header class="mt-5 mb-2 d-flex justify-content-between align-item-center">
          <h3>Mylawlegal</h3>
          <select class="btn btn-success" @change="select_form($event)">
            <option value="Select Issue">Select Issue</option>
            <option v-for="form in forms" :key="form.id" :value="form.id">{{form.purpose}}</option>
          </select>
        </header><hr>

        <div class="card mb-3">
          <div v-show="!select_issue" class="text-center">
            <h4 class="text-info">Please select your case of interest</h4>
          </div>
          <div class="card-body" v-show="select_issue">
            <!-- Form title -->
            <h4 class="card-title">{{selected_form.purpose}} Form</h4>

            <!-- form section -->
            <Form />

          </div>
        </div>

        <!-- submit section -->
        <div class="text-center" v-show="submitted_form">
            <button class="btn" @click.prevent="see_submission">View Submission</button>
        </div>

        <!-- result for submission -->
        <div v-show="view_submission" class="card mb-3 mt-3 p-3">
            <h4 class="text-info">Recent Submission</h4>
            <div v-for="question in lastest_submission" :key="question.id">
              <h5 class="text-secondary">{{question.question}}</h5>
              <p class="text-success">{{question.answer}}</p>
            </div>
            <div class="text-right">
              <button class="btn btn-danger" @click.prevent="close_view_submission">Close</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex"; 
import Form from "@/components/Form";

export default {
  name: "Home",
  components: {Form},
  data: function () {
    return {
     select_issue: false,
     view_submission: false
    }
  },
  created() {
    this.$store.dispatch('form/fetch_forms'); 
  },
  computed: {
    ...mapState({
      forms: state => state.form.forms,
      selected_form: state => state.form.selected_form,
      lastest_submission: state => state.form.lastest_submission,
      submitted_form: state => state.form.submitted_form
    }),
  },
  methods: {
    select_form(event) { //select the form user wish to fill 
      if(event.target.value !== "Select Issue"){
        this.select_issue = true
        this.$store.commit("form/selected_form", event.target.value)
      }else{
        this.select_issue = false
      }
    },
    see_submission() {// open the result user submitted
      this.view_submission = true
    },
    close_view_submission() { // close the result user submitted
      this.view_submission = false
    }
  }
}
</script>

<style>
option{
  background: #f9f9f9;
  color: black;
}
.btn{
  height: 40px;
}
</style>