<template>
  <div
    :class="['todo-item', todoProps.completed ? 'completed' : '']"
    class="flex items-center justify-between"
  >
    <div class="info flex items-center justify-between gap-2">
      <input
        type="checkbox"
        :checked="todoProps.completed"
        @change="markItemCompleted"
        class="text-4xl w-4 h-4"
      />
      <div class="text-xl text-cyan-600">{{ todoProps.title }}</div>
      <div class="text-xl text-cyan-600">{{ todoProps.person }}</div>
      <div class="text-xl text-cyan-600">{{ todoProps.dateCompleted }}</div>
    </div>
    <div class="button flex items-center justify-between gap-2">
      <button class="btn-edit btn bg-orange-500 text-white" @click="editItem">
        Edit
      </button>
      <button class="btn-delete btn bg-red-500 text-white" @click="deleteItem">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todoProps"],
  setup(props, context) {
    const markItemCompleted = () => {
      context.emit("item-completed", props.todoProps.id);
    };

    const deleteItem = () => {
      context.emit("item-deleted", props.todoProps.id);
    };

    const editItem = () => {
      context.emit("item-edit", props.todoProps.id);
    };

    return {
      markItemCompleted,
      deleteItem,
      editItem,
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