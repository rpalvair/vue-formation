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
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to)
    console.log(from)
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return {
      left: 0,
      top: 0
    }
  }
});

app.use(router);

app.mount('#app');
