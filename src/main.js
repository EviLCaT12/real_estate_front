import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import router from "@/router";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
    .use(router,VueAxios,axios,BootstrapVue3)
    .mount('#app')
