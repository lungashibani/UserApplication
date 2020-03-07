import Vue from "vue";
import App from "./components/App.vue";
// import VueRouter from "vue-router";
import LoginComponent from "./views/login.vue";
import SecureComponent from "./views/secure.vue";
// import UserProfile from "./views/userProfile";
import UserProfileSettings from "./views/userProfileSettings";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    }
  ]
});

new Vue({
  el: "#app",
  render: h => h(App)
});
