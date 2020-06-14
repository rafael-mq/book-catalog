<template>
  <header class="header">
    <router-link to="/" class="title flex-item-10">
      <h1>Book Catalog</h1>
    </router-link>
    <router-link to="/about" class="about flex-item-1"><p>About</p></router-link>
    <router-link to="/register" class="register flex-item-1"><p>Register book</p></router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  display: flex;
  align-items: center;
}

.title {
  text-align: start;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.flex-item-10 {
  flex: 10;
}

.flex-item-1 {
  flex: 1 0 4em;
}
.about {
  text-align: right;
}
.register {
  text-align: center;
}
</style>