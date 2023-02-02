import {createRouter, createWebHashHistory} from "vue-router";

const routes = [

]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router