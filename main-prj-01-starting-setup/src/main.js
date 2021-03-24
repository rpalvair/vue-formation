import { createApp } from 'vue';
import router from './router'
import App from './App.vue'
import store from './store/index'
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'

const app = createApp(App);

app.use(router)

app.use(store)

app.component(BaseCard)
app.component(BaseButton)

app.mount('#app');
