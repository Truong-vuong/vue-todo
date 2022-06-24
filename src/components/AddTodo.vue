<template>
  <form @submit="addItem" class="flex items-center justify-between gap-4 mb-4">
    <input
      type="text"
      v-model="title"
      placeholder="Todo..."
      class="outline-none border-none p-2 text-green-700 font-bold"
    />
    <input
      type="text"
      v-model="person"
      placeholder="Person..."
      class="outline-none border-none p-2 text-green-700 font-bold"
    />
    <input
      type="text"
      v-model="dateCompleted"
      placeholder="Completed..."
      class="outline-none border-none p-2 text-green-700 font-bold"
    />
    <input
      type="submit"
      value="ADD"
      class="btn-add btn bg-green-700 font-bold text-white"
    />
  </form>
</template>

<script>
import { ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodo",
  props: ["todoChild"],

  setup(props, context) {
    const test = ref(props.todoChild);
    const title = ref("");
    const person = ref("");
    const dateCompleted = ref("");
    watch(test, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });
    const addItem = (e) => {
      e.preventDefault();
      const newItem = {
        id: uuidv4(),
        title: title.value,
        person: person.value,
        dateCompleted: dateCompleted.value,
        completed: false,
      };

      context.emit("add-item", newItem);

      title.value = "";
      person.value = "";
      dateCompleted.value = "";
    };

    return {
      title,
      person,
      dateCompleted,
      addItem,
    };
  },
};
</script>

<style>
</style>