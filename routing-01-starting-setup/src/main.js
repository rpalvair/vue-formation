import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from "./components/teams/TeamsFooter.vue"
import UsersFooter from "./components/users/UsersFooter.vue"

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { main: TeamsList, footer: TeamsFooter },
      children: [
        { name: 'team-members', path: ':id', component: TeamMembers, props: true },
      ]
    },
    {
      path: '/users',
      components: { main: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log("BeforeEnter users")
        console.log(to, from)
        next()
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to)
    // console.log(from)
    // console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return {
      left: 0,
      top: 0
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log("Global beforeEach")
  console.log(to, from)
  next()
  // next(false) stop the navigation
  // next({ name: 'team-members', params: { id: 't2' } }) //navigate to a route
})

app.use(router);

app.mount('#app');
