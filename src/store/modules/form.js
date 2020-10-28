import axios from "axios";

// make unique names 
const make_unique_name =() => {
    
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

// add unique name to inputs
const add_unqui_name =() => {
    let unqui_name;
    for (let index = 0; index < state.selected_form.input.length; index++){
        unqui_name = make_unique_name();
        state.selected_form.input[index]["input_name"] = unqui_name;
    }
}

//holds all the state properties
const state = {
    forms: [],
    selected_form: {},
    lastest_submission: {
        "question": "",
        "answer": ""
    },
    submitted_form: false
};

//returns the state properties
const getters = {};

//get info from server
const actions = {
    fetch_forms: ({commit}) => {
        axios.get("/issue/forms")
        .then(response => {
            commit("forms", response.data);
            
        }) 
    }
};

//updates the different state properties
const mutations = {
    forms: (state, data) => (state.forms = data),
    selected_form: (state, form_id) => {
        for (let index = 0; index < state.forms.length; index++){
            if( state.forms[index].id == form_id){
                state.selected_form = state.forms[index];
                add_unqui_name();
                break;
            }
        }
    },
    lastest_submission: (state, data) => (state.lastest_submission = data),
    submitted_form: (state, status ) => (state.submitted_form = status)
};


export default {
    //export all the listed properties
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};