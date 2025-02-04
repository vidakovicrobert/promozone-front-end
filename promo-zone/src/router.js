import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import Home from './App.vue';

const routes = [
    { path: '/', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
