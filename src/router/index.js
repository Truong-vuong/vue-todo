import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTodo from '../views/AddTodo.vue'
import EditTodo from '../views/EditTodo.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/add',
        name: 'add',
        component: AddTodo
    },
    {
        path: '/todos/:id',
        name: 'edit',
        component: EditTodo,
        props: true,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router