<template>
  <div class="container w-full h-full flex justify-center items-center">
    <div class="box bg-slate-300 rounded p-8 mt-8">
      <AddTodo @add-item="AddTodoList" :todos="todos" />
      <input type="text" v-model="filter" placeholder="filter" />
      <button @click="sortName" class="btn bg-cyan-600">Sort by Name</button>
      <button @click="sortDate" class="btn bg-cyan-600">Sort by Date</button>
      <TodoItem
        v-for="todo in todosComputed"
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
import { reactive, ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";

import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";

export default {
  name: "TodosItem",
  components: { TodoItem, AddTodo },
  setup() {
    const todos = reactive({
      data: [
        {
          id: uuidv4(),
          title: "nấu cơm",
          person: "Name",
          dateCompleted: new Date("1/1/2011").toLocaleDateString(),
          completed: false,
        },
        {
          id: uuidv4(),
          title: "học bài",
          person: "Vux",
          dateCompleted: new Date("2 February, 2022").toLocaleDateString(),
          completed: false,
        },
        {
          id: uuidv4(),
          title: "quét nhà",
          person: "Anh",
          dateCompleted: new Date("3 February, 2022").toLocaleDateString(),
          completed: false,
        },
      ],
    });

    const filter = ref("");

    const todosComputed = computed(() =>
      todos.data.filter((item) => item.title.includes(filter.value))
    );

    const sortName = () => {
      // let nameArray = reactive([]);
      // todos.data.forEach((item) => {
      //   nameArray.push(item.title);
      // });
      // nameArray.sort();
      // console.log(nameArray);

      let data = todos.data;
      console.log(
        data.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        })
      );
    };

    const sortDate = () => {
      let a = todos.data;
      console.log(
        a.sort((a, b) => {
          if (a.dateCompleted < b.dateCompleted) return -1;
          if (a.dateCompleted > b.dateCompleted) return 1;
          return 0;
        })
      );
    };

    const markComplete = (id) => {
      todos.data = todos.data.map((todo) => {
        if (todo.id == id) todo.completed = !todo.completed;
        return todo;
      });
    };

    const handleDelete = (id) => {
      todos.data = todos.data.filter((todo) => todo.id !== id);
    };

    const AddTodoList = (newTodo) => {
      todos.data.push(newTodo);
    };

    // let todoChild = reactive({
    //   data: {
    //     id: "",
    //     title: "",
    //     person: "",
    //     dateCompleted: "",
    //   },
    // });
    const editTodo = (updateItem) => {
      let newTodo = todos.data.find((todo) => todo.id == updateItem.id);
      if (newTodo) {
        newTodo.title = updateItem.title.value;
        newTodo.person = updateItem.person.value;
        newTodo.dateCompleted = updateItem.dateCompleted.value;
      }
    };

    // watch(
    //   () => todoChild,
    //   () => {
    //     console.log("change");
    //   },
    //   { deep: true }
    // );
    return {
      todos,
      markComplete,
      handleDelete,
      AddTodoList,
      editTodo,
      todosComputed,
      filter,
      sortName,
      sortDate,

      // todoChild,
    };
  },
};
</script>

<style>
.container {
  padding: 0 4rem;
}
</style>