import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { ObserveVisibility } from "vue-observe-visibility";

Vue.use(BootstrapVue);
Vue.directive("observe", ObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
