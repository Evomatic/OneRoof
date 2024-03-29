<template>
  <div class="todo-page orange lighten-5" id="todo-page-container">
    <!-- Add todo input field-->
    <v-text-field
      v-model="newTodoMessage"
      @click:append.prevent="addTodo"
      @keyup.enter.prevent="addTodo"
      class="pa-2 orange lighten-5"
      outlined
      label="New Todo"
      append-icon="mdi-pencil-plus-outline"
      clearable
      hide-details
    >
    </v-text-field>
    <!-- Add todo input field ends-->

    <!-- todo list platform -->
    <v-list
      v-if="checkTodos.length"
      class="pa-0 orange lighten-5"
      two-line
      flat
    >
      <!-- Each Todo in Todo list -->
      <div
        id="todo-container"
        class="orange lighten-4"
        v-for="todo in checkTodos"
        :key="todo.id"
      >
        <v-list-item
          @click="completeTodo(todo.id)"
          :class="{ 'light-green accent-1': todo.complete }"
        >
        
          <!-- Todo tick box     -->
          <v-list-item-action>
            <v-checkbox
              :input-value="todo.complete"
              color="light-green darken-4"
            >
            </v-checkbox>
          </v-list-item-action>
          <!-- Todo tick box ends -->

          <!-- Todo list text -->
          <v-list-item-content>
            <v-list-item-title
              :class="{ 'text-decoration-line-through': todo.complete }"
            >
              {{ todo.todo }}
            </v-list-item-title>

            <v-list-item-subtitle>
              {{ todo.victimid }}
            </v-list-item-subtitle>

            <v-list-item-subtitle
              :class="{ 'redtext': todo.date.includes('day') || todo.date.includes('days') }"
            >
              {{ todo.date }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <!-- Todo list text ends -->

          <v-list-item-action>
            <!-- Assignee Dropdown Starts -->
            <v-menu offset-y>
              <v-list>
                <v-list-item v-for="user in users" :key="user.id" :value="todo">
                  <!-- Todo tick box     -->
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="todo.complete"
                      color="light-green darken-4"
                    >
                    </v-checkbox>
                  </v-list-item-action>
                  <!-- Todo tick box ends -->

                  <v-list-item-action>
                    <!-- Assignee Dropdown Starts -->
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          class="pt-2 pr-1"
                          color="orange accent-3"
                          v-bind="attrs"
                          v-on="on"
                          >mdi-account-plus</v-icon
                        >
                      </template>

                      <v-list>
                        <v-list-item
                          v-for="user in users"
                          :key="user.id"
                          :value="todo"
                        >
                          <v-list-item-title @click="setAssignee(user, todo)">
                            {{ user.username }}
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <!-- Assignee Dropdown Ends -->
                    <!-- Todo Menu Starts -->
                    <TodoMenu
                      :todo="todo"
                      v-on:deleteFromModal="deleteFromModal"
                      v-on:editFromModal="editFromModal"
                      v-on:optionClicked="setState(todo)"
                      @setAssignee="setAssignee"
                    />
                  </v-list-item-action>
                  <!-- Todo Menu Ends -->
                </v-list-item>
              </v-list>
            </v-menu>
            <!-- Assignee Dropdown Ends -->
            <!-- Todo Menu Starts -->
            <TodoMenu
              :todo="todo"
              v-on:deleteFromModal="deleteFromModal"
              v-on:editFromModal="editFromModal"
              v-on:optionClicked="setState(todo)"
              @setAssignee="setAssignee"
            />
          </v-list-item-action>
          <!-- Todo Menu Ends -->
        </v-list-item>
        <!-- Border Between Todos -->
        <v-divider :key="todo.id"></v-divider>
      </div>
      <!-- Each Todo in Todo list ends-->
    </v-list>
    <!-- todo list platform ends-->

    <!-- No Todos if todo list is empty -->
    <div v-else class="no-todo-bg">
      <v-icon size="100" color="orange darken-1" id="icon-todo"
        >mdi-help-box</v-icon
      >
      <div class="text-h5">Add a Todo!</div>
    </div>
    <!-- Each Todo in Todo list ends-->
    <!-- todo list platform ends-->
  </div>
</template>

<script>
import TodoMenu from "../components/TodoMenu.vue";
import { DateTime } from "luxon";

export default {
  name: "Home",
  components: {
    TodoMenu,
  },
  data() {
    return {
      newTodoMessage: "",
      currentId: "",
      selectedVictim: "",
      users: this.$store.state.usersInSameHouse,
      currentTodo: {},
    };
  },
  mounted() {
    this.$store.dispatch("getTodos", this.$store.state.user.house_keys[0]);
    this.$store.dispatch(
      "populateVictimList",
      this.$store.state.user.house_keys[0]
    );
  },

  methods: {
    async addTodo() {
      if (this.newTodoMessage.length <= 0) {
        return
      }

      let newTodo = {
        // id:
        todo: this.newTodoMessage,
        date: DateTime.now().toISO(),
        victimid: "Everyone",
        creatorid: this.$store.state.user.username,
        complete: false,
        house_key: this.$store.state.user.house_keys[0],
        assigneeURL: ""
      };

      await this.$store.dispatch("addTodo", newTodo);
      await this.$store.dispatch(
        "getTodos",
        this.$store.state.user.house_keys[0]
      );

      this.newTodoMessage = "";
    },

    completeTodo(id) {
      let todo = this.checkTodos.filter((todo) => todo.id === id)[0];
      todo.complete = !todo.complete;
    },

    async deleteTodo(id) {
      this.$store.state.todos = this.$store.state.todos.filter(
        (todo) => todo.id !== id
      );
      await this.$store.dispatch("deleteTodo", id);
    },

    async setState(todo) {
      this.$store.commit("setCurrentTodo", todo);
      this.currentTodo = todo; 
      this.currentId = todo.id;
    },
    deleteFromModal() {
      this.$store.dispatch("deleteTodo", this.currentId).then(() => {
        this.$store.dispatch("getTodos", this.$store.state.user.house_keys[0]);
      });
    },
    async editFromModal() {
      this.$store.state.currentTodo.todo = this.$store.state.currentTodoMessage;
      await this.$store.dispatch("updateTodo", this.$store.state.currentTodo);
    },
    async setAssignee(value) {
      this.currentTodo.victimid = value;
      for (let user of this.users) {
        if (user.username === this.currentTodo.victimid) {
          this.currentTodo.assigneeURL = user.photo_url
        }
      }
      console.log(this.currentTodo)
      await this.$store.dispatch("updateTodoVictim", this.currentTodo);
    },
  }, // method ends

  computed: {
    checkTodos: function () {
      let todos = this.$store.state.todos;
      for (let todo of todos) {
        let timestamp = todo.date;
        let timeFromThen = DateTime.fromISO(timestamp).toRelative({ days: 1 });
        todo.date = timeFromThen;
      }
      return todos;
    },
  },
};
</script>

<style scoped>
.no-todo-bg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}

.redtext {
  color: red !important;
}

#icon-todo {
  transform: translateX(12%);
}
</style>