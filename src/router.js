import {createRouter, createWebHashHistory} from "vue-router";
import LoginPage from "@/components/Pages/LoginPage";
import RegPage from "@/components/Pages/RegPage";
import MainPage from "@/components/Pages/MainPage";

export default createRouter({
    history:createWebHashHistory(),
    routes: [
        {path: '/', component: MainPage, name: 'MainPage'},
        {path: '/login', component:LoginPage},
        {path: '/reg', component: RegPage},
    ]
})