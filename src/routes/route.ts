import Home from "../view/Home.vue";
import About from "../view/About.vue";
import {createRouter,createWebHashHistory} from "vue-router"

const routes = [{ path: '/', component: ()=>import("@/view/Login.vue") },
{ path: '/about', component: About },]


export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})








