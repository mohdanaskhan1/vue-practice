import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import TasksModel from './components/TasksModel.vue';
import TodoCard from './components/TodoCard.vue';


const app = createApp(App)

app.component("TasksModel",TasksModel)
app.component("TodoCard",TodoCard)

app.use(createPinia())

app.mount('#app')
