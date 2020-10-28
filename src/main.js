import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Server } from "miragejs";

new Server({
  routes() {
    this.get("/issue/forms", () => {
      return [
        {
          "purpose": "propono",
          "id": "t6r56fhhhyyt",
          "input" : [
            {
              label: 'Your full name',
              type: 'text'
            },
            {
              label: 'Age',
              type: 'number'
            },
            {
              label: 'country',
              type: 'text'
            },
            {
              label: 'state',
              type: 'text'
            },
            {
              label: "date",
              type: "date"
            },
            {
              label: "Complain",
              type: "textarea"
            }
          ]
        },
        {
          "purpose": "Corruption",
          "id": "t6r56fyyt",
          "input" : [
            {
              label: 'Name of Politician',
              type: 'text'
            },
            {
              label: 'Job position of govenment',
              type: 'text'
            },
            {
              label: 'language',
              type: 'text'
            },
            {
              label: 'Your Phone number',
              type: 'tel'
            },
          ]
        },
        {
          "purpose": "Sexual Abuse",
          "id": "552tgvvg",
          "input" : [
            {
              label: 'What is the name of the offender',
              type: 'text'
            },
            {
              label: 'When was the date of the incident?',
              type: 'date'
            },
          ]
        },
        {
          "purpose": "Bribery",
          "id": "552thyh7g",
          "input": [
            {
              label: 'What is the name of the officer in question?',
              type: 'text',
            },
            {
              label: 'When was the date of the incident?',
              type: 'date',
            },
            {
              label: 'How much is the bribe that was paid? (optional)',
              type: 'number',
            }
          ]
        },
        {
          "purpose": "Police Brutality",
          "id": "552thyh7567g",
          "input": [
            {
              label: 'What is the name of the officer in question?',
              type: 'text',
            },
            {
              label: 'When was the date of the incident?',
              type: 'date',
            },
            {
              label: 'How much is the bribe that was paid? (optional)',
              type: 'number',
            }
          ]
        }
      ]
    })
  }
})

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
