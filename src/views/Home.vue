<template>
  <div id="home">
    <BookList v-bind:books="books" v-on:del-book="deleteBook" v-on:edit-book="editBook" />
  </div>
</template>

<script>
// @ is an alias to /src
import BookList from "../components/BookList";
import BookApi from "../services/bookApi";

export default {
  name: "Home",
  components: {
    BookList
  },
  data() {
    return {
      books: [
        // {_id: "1", title: "harry potter", author: "JK rowling", publisher: "hogwarts", subject: "fiction"},
        // {_id: "2", title: "vidas secas", author: "graciliano ramos", publisher: "brasil", subject: "literature"},
      ]
    };
  },
  methods: {
    deleteBook(id) {
      BookApi.deleteBook(id)
        .then(() => {
          this.books = this.books.filter(el => el._id != id);
        })
        .catch(e => console.log(e));
    },
    editBook(id) {
      const bookToEdit = this.books.find(el => el._id == id);
      this.$router.push({
        name: "Register",
        params: { update: true, bookData: { ...bookToEdit } }
      });
    }
  },
  created() {
    BookApi.getBooks()
      .then(res => {
        this.books = res.data;
      })
      .catch(e => console.error(e));
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

/* .btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
} */
</style>