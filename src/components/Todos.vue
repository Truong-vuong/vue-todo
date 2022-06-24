<template>
  <div class="container w-full h-full flex justify-center items-center">
    <div class="box bg-slate-300 rounded p-8 mt-8">
      <AddTodo
        @add-item="AddTodoList"
        :todoChild="todoChild"
        v-if="todoChildId"
      />
      <FilterTodo :todosProps="editTodo" />
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todoProps="todo"
        @item-completed="markComplete"
        @item-deleted="handleDelete"
        @item-edit="editTodo"
      />
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";
import FilterTodo from "./FilterTodo.vue";

export default {
  name: "TodosItem",
  components: { TodoItem, AddTodo, FilterTodo },
  setup() {
    const todos = ref([
      {
        id: uuidv4(),
        title: "việc 1",
        person: "Name",
        dateCompleted: "11-1",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "việc 2",
        person: "Vux",
        dateCompleted: "11-1",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "việc 3",
        person: "Anh",
        dateCompleted: "11-2",
        completed: false,
      },
    ]);

    const markComplete = (id) => {
      todos.value = todos.value.map((todo) => {
        if (todo.id == id) todo.completed = !todo.completed;
        return todo;
      });
    };

    const handleDelete = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    const AddTodoList = (newTodo) => {
      todos.value.push(newTodo);
    };

    let todoChildId = reactive("");
    const editTodo = (todo) => {
      todoChildId = todo;
    };

    return {
      todos,
      markComplete,
      handleDelete,
      AddTodoList,
      editTodo,
      todoChildId,
    };
  },
};
</script>

<style>
.container {
  padding: 0 4rem;
}
</style>