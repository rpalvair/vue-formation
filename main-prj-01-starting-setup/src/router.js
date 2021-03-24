import { createRouter, createWebHistory } from 'vue-router'
import CoachesList from './pages/coaches/CoachesList.vue'
import Nothing from './pages/Nothing.vue'
import CoachDetails from './pages/coaches/CoachDetails.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetails, children: [
                { path: 'contact', component: ContactCoach }
            ]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/:nothing(.*)', component: Nothing }

    ]
})

export default router