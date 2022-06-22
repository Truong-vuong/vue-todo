<template>
    <div class="container  w-full h-full flex justify-center items-center ">
        <div class="box bg-slate-300 rounded p-8 mt-8">
            <AddTodo @add-item="AddTodoList"/>
            <TodoItem v-for="todo in todos" :key="todo.id" :todoProps="todo" 
            @item-completed="markComplete"
            @item-deleted="handleDelete"
            @item-edit="editTodo"
            />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue'

export default {
    name:"TodosItem",
    components: { TodoItem, AddTodo },
    setup() {
      
        const todos = ref([
            {
                id:uuidv4(),
                title: "việc 1",
                completed:false,
            },
             {
                id:uuidv4(),
                title: "việc 2",
                completed:false,
            },
             {
                id:uuidv4(),
                title: "việc 3",
                completed:false,
            },
        ]);

        const markComplete = id => {
            todos.value = todos.value.map(todo => {
                if(todo.id == id) todo.completed = !todo.completed
                return todo
            })
        }

        const handleDelete = id => {
            todos.value = todos.value.filter(todo => todo.id !== id)
        }

        const AddTodoList = newTodo => {
            todos.value.push(newTodo)
        }

        const editTodo = todo => {
            console.log(todos.value);
            console.log( todo);
        }

        return {
            todos,
            markComplete,
            handleDelete,
            AddTodoList,
            editTodo,
        }
    }
    
}
</script>

<style>
    .container {
        padding: 0 4rem;
    }
</style>