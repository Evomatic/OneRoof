<template>
  <v-dialog persistent max-width="75%" :value="true">
    <v-card class="orange lighten-5">
      <v-card-title class="headline"> Add a todo </v-card-title>
      <v-card-text
        >Would you like to add a todo for {{ this.chore.chore }}?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-3" text @click="$emit('closeTodoModalPlease')">
          CANCEL
        </v-btn>
        <v-btn @click="makeATodo" color="orange darken-3" text>
          ADD A TODO
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteChoreCheck",
  props: ["chore"],
  methods: {
    makeATodo() {
      this.$emit("makeATodoPlease", this.chore);
    },
  },
};
</script>
