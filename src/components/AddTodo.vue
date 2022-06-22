<template>
  <form @submit="addItem" class="flex items-center justify-between gap-4 mb-4">
    <input type="text" v-model="title" placeholder="Todo..." class="outline-none border-none p-2 text-green-700 font-bold" />
    <input type="submit" value="ADD" class="btn-add btn bg-green-700 font-bold text-white"/>
  </form>
</template>

<script>
import {ref} from 'vue'
import { v4 as uuidv4 } from 'uuid';

export default {
    name:"AddTodo",
    setup(props,context) {
        const title = ref('')
        
       const addItem = e => {
        e.preventDefault()

        const newItem = {
            id:uuidv4(),
            title: title.value,
            completed:false,
        }

        context.emit('add-item', newItem)

        title.value =''
       }

        return {
            title,
            addItem,
        }
    }
}
</script>

<style>

</style>