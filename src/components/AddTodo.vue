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
      type="date"
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
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodo",
  // props: ["todoChild"]["todos"],
  props: {
    todoChild: {
      type: Object,
      default() {
        return {};
      },
    },
    todos: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props, context) {
    // const listDataProps = reactive({ data: props.todos });
    // const dataTodoChild = reactive(props.todoChild);

    // const dataSubmit = reactive({
    //   data: Object.assign({}, dataTodoChild.data),
    // });
    // watch(
    //   () => dataTodoChild,
    //   () => {
    //     dataSubmit.data = Object.assign({}, dataTodoChild.data);
    //   },
    //   { deep: true }
    // );
    let title = ref("");
    let person = ref("");
    let dateCompleted = ref("");

    const addItem = (e) => {
      e.preventDefault();
      let newItem = {
        id: uuidv4(),
        title: title.value,
        person: person.value,
        dateCompleted: dateCompleted.value,
      };
      context.emit("add-item", newItem);
    };
    // watch(
    //   () => listDataProps,
    //   (newVal) => {
    //     console.log("12", newVal);
    //   },
    //   { deep: true }
    // );
    return {
      // dataTodoChild,
      title,
      person,
      dateCompleted,
      addItem,
      // listDataProps,
      // dataSubmit,
    };
  },
};
</script>

<style>
</style>