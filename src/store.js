import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packagesList: []
  },
  mutations: {

  },
  actions: {
    postPackages: function (context, values) {
      axios.post("http://localhost:8080/packages", {
       number: values.number,
        user: values.user,
        telephone: values.telephone,
        weight: values.weight,
        state: 1
      }).then(function (response) {
        window.console.log(response);
      }).catch(function (error) {
        window.console.log(error);
      });
    }
  }
})
