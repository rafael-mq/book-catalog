<template>
  <div id="book-list">
    <div v-bind:key="book._id" v-for="book in books">
      <BookItem
        v-bind:book="book"
        v-on:del-book="$emit('del-book', book._id)"
        v-on:edit-book="$emit('edit-book', book._id)"
      />
    </div>
  </div>
</template>

<script>
import BookItem from "./BookItem";

export default {
  name: "BookList",
  components: {
    BookItem
  },
  props: ["books"]
};
</script>

<style scoped>
#book-list {
  width: 80%;
  margin: 20px auto;
  border-top: 1px #ccc dotted;
}
</style>