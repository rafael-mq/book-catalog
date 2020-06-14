<template>
  <div class="book-item">
      <div class="book-info">
        <p id="book-title">
          {{book.title}}
        </p>
        <small>Author: {{book.author}}</small>
        <small>Publisher: {{book.publisher}}</small>
        <small>Subject: {{book.subject}}</small>
      </div>
      <button class="edit" v-on:click="$emit('edit-book')" >Edit</button>
      <button class="del" v-on:click="$emit('del-book')" >x</button>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"],
};
</script>

<style scoped>
.book-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  text-align: start;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.book-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
#book-title {
  font-weight: bold;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  /* height: 30px; */
  cursor: pointer;
  float: right;
  font-size: 14pt;
}
.edit {
  background: #ffbf00;
  margin-right: 10px;
  color: #fff;
  border: none;
  /* height: 30px; */
  padding: 5px 9px;
  border-radius: 20%;
  cursor: pointer;
  float: right;
  font-size: 14pt;

}
.checkbox {
  margin: 0 20px;
}
</style>