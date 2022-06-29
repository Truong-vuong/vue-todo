<template>
  <div class="list">
    <div class="info flex gap-4">
      <div class="text-xl text-cyan-800">{{ todoProps.title }}</div>
      <div class="text-xl text-cyan-800">{{ todoProps.person }}</div>
      <div class="text-xl text-cyan-800">{{ todoProps.dateCompleted }}</div>
      <button class="btn-edit btn bg-orange-500 text-white" @click="editItem">
        <i class="bx bx-edit-alt"></i>
      </button>
      <button class="btn-delete btn bg-red-500 text-white" @click="deleteItem">
        <i class="bx bx-x"></i>
      </button>
    </div>
    <div class="update" v-if="showUpdateForm">
      <form @submit.prevent="updateTodo">
        <input class="a" type="text" v-model="title" />
        <input type="text" v-model="person" />
        <input type="date" v-model="dateCompleted" />
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TodoItem",
  props: ["todoProps"],
  setup(props, context) {
    let showDetails = ref(false);
    let showUpdateForm = ref(false);
    let person = ref("");
    let dateCompleted = ref("");
    let title = ref("");

    const markItemCompleted = () => {
      context.emit("item-completed", props.todoProps.id);
    };

    const deleteItem = () => {
      context.emit("item-deleted", props.todoProps.id);
    };

    const editItem = () => {
      showUpdateForm.value = !showUpdateForm.value;
      person.value = props.todoProps.person;
      dateCompleted.value = props.todoProps.dateCompleted;
      title.value = props.todoProps.title;
    };

    const updateTodo = () => {
      let updateItem = {
        id: props.todoProps.id,
        title: title,
        person: person,
        dateCompleted: dateCompleted,
      };
      context.emit("item-edit", updateItem);

      showUpdateForm.value = false;
    };

    return {
      markItemCompleted,
      deleteItem,
      editItem,
      showDetails,
      showUpdateForm,
      title,
      person,
      dateCompleted,
      updateTodo,
    };
  },
};
</script>

<style>
.todo-item {
  background-color: #f4f4f4;
  padding: 1rem;
}

.completed {
  text-decoration: line-through;
}
</style>