<template>
  <div id="register">
    <RegisterBook v-bind:bookData="bookData"/>
  </div>
</template>

<script>
import RegisterBook from '../components/RegisterBook'
export default {
  name: "Register",
  components: {
    RegisterBook
  },
  props: [
    "bookData",
    "update"
  ],
  created() {
  }
}
</script>

<style>

</style>