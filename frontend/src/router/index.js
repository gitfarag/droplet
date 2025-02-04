import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: () => import('./../views/Home.vue')
                },
                {
                    path: '/resume',
                    name: 'Resume',
                    component: () => import('./../views/Resuem.vue')
                },
                {
                    path: '/projects',
                    name: 'Experience',
                    component: () => import('./../views/Projects.vue')
                },
                {
                    path: '/contact',
                    name: 'ContactMe',
                    component: () => import('./../views/Contact.vue')
                }
            ]
        },
        {
            name: 'Error404',
            path: '/:catchAll(.*)',
            component: () => import('./../views/Error404.vue'),
        },
    ]
})
export default router