import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packagesList: [],
    loading: false,
    contextFilter: 'all'
  },
  getters: {
    packagesListFilter: function (state) {
      let packagesList = [];
      state.packagesList.forEach(function (element) {
        if (element.state === state.contextFilter || state.contextFilter === 'all') {
          packagesList.push(element);
        }
      });
      return packagesList;
    }
  },
  mutations: {
    initPackagesList: function (state, packages) {
      let packagesListTemp = [];
      state.packagesList = packages;

      packages.forEach(function (element) {
        packagesListTemp.push({
          key: element.key,
          number: element.number,
          user: element.user,
          telephone: element.telephone,
          weight: element.weight,
          state: element.state,
          dataTime: element.dataTime
        })
      });
      window.console.log(packagesListTemp);
      state.packagesList = packagesListTemp;

    },
    changeLoading: function (state, content) {
      state.loading = content;
    },
    changeContextFilter: function (state, contextFilter) {
      state.contextFilter = contextFilter;
    }
  },

  actions: {
    getPackages: function (context) {
      context.commit("changeLoading", true);
      axios.get("http://localhost:8080/packages")
        .then(function (response) {
          context.commit("changeLoading", false);
          context.commit("initPackagesList", response.data);
        }).catch(function (error) {
          context.commit("changeLoading", false);

          window.console.log(error);
        });
    },
    postPackages: function (context, values) {
      axios.post("http://localhost:8080/packages", {
        number: values.number,
        user: values.user,
        telephone: values.telephone,
        weight: values.weight,
        state: "未取件"
      }).then(function (response) {
        context.dispatch('getPackages');
        window.console.log(response);
      }).catch(function (error) {
        window.console.log(error);
      });
    },
    putPackages: function (context, vaules) {
      axios.put("http://localhost:8080/packages", {
        number: vaules.number,
        state: "已取件"
      }).then(function (response) {
        context.dispatch('getPackages');
        window.console.log(response);
      }).catch(function (error) {
        window.console.log(error);
      });
    }
  }
})
