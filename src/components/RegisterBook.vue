<template>
  <div id="box-register">
    <fieldset>
      <legend>{{this.legend}} Book</legend>
      <form v-on:submit.prevent="handleRegister">
        <input type="text" v-model="title" name="title" placeholder="Book title" />
        <input type="text" v-model="author" name="author" placeholder="Author" />
        <input type="text" v-model="publisher" name="publisher" placeholder="Publisher" />
        <input
          type="text"
          v-model="subject"
          name="subject"
          placeholder="Subject: Suspense, Fiction, Culinary, ..."
        />
        <input type="submit" value="Submit" class="btn" />
      </form>
    </fieldset>
  </div>
</template>

<script>
import BookApi from "../services/bookApi";
export default {
  name: "AddBook",
  data() {
    return {
      title: "",
      author: "",
      publisher: "",
      subject: "",
      legend: "Register"
    };
  },
  props:[
    "bookData"
  ],
  methods: {
    handleRegister() {
      let formBook = {
        title: this.title,
        author: this.author,
        publisher: this.publisher,
        subject: this.subject
      }
      if (this.bookData) {
        // chama a api
        BookApi.updateBook(this.bookData._id, formBook)
        .then(() => this.$router.push({name: "Home"}))
        .catch(e => alert("Failed to edit book.\n" + e))
      } else {
        // chama a api
        BookApi.createBook(formBook)
        .then(() => this.$router.push({name: "Home"}))
        .catch(e => alert("Failed to register book.\n" + e))
      }
    }
  },
  created() {
    if (this.bookData){
      this.title = this.bookData.title;
      this.author = this.bookData.author;
      this.publisher = this.bookData.publisher;
      this.subject = this.bookData.subject;
      this.legend = "Edit";
    }
    
  }
};
</script>

<style scoped>
#box-register {
  width: 80%;
  margin: 0 auto;
}
fieldset {
  margin: 15px;
  /* width: 80%; */
  border-radius: 10px;
}
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  align-items: stretch;
}
legend {
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
}
input[type="text"] {
  flex: 10;
  margin: 15px;
  font-size: 20px;
}
.btn {
  width: 5em;
  margin: 0 15px;
  font-weight: bold;
  font-size: 20px;
}
/*
input[type="submit"] {
  flex: 2;
} */
</style>