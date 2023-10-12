import { createRouter, createWebHistory } from 'vue-router';
// import JobListPage from './JobListPage.vue';
import About  from './views/About.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import NotFound from './views/NotFound.vue';
import Jobs from './views/Jobs.vue';
import { useAuthStore } from './stores/authStore';
const routes = [
 {
    path: '/login',
    name: 'Login',
    component: Login

 },
 {
   path: '/about',
   name: 'About',
   component: About
},
{
   path: '/',
   name: 'Home',
   component: Home
},
{
   path: '/jobs',
   name: 'Jobs',
   component: Jobs,

},
{
   path: '/:catchAll(.*)',
   name: 'NotFound',
   component: NotFound
}
];

const router = createRouter({
 history: createWebHistory(),
 routes
});

// router.beforeEach((to, from, next) => {
//    const auth = useAuthStore();
 
//    if (to.path === '/jobs' && !auth.isAuthenticated.value) {
//      next('/login');
//    } else {
//      next();
//    }
//  });
router.beforeEach((to, from, next) => {
   const authStore = useAuthStore();
   if (to.path === '/jobs' && !authStore.token) {
     next('/login');
   } else {
     next();
   }
 });
export default router;

