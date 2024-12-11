<template>
  <div class="header">
    <div class="wrap">
      <Header />
    <nav>
      <router-link to="/page1">Page 1</router-link>
      <router-link to="/page2">Page 2</router-link>
      <router-link to="/page3">Page 3</router-link>
    </nav>
    </div>

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Header, Footer },
};
</script>

<style>
.header {
  background-color: #f4f4f4;
  padding: 20px;
  width: 750px;
}
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
}
nav a {
  text-decoration: none;
  font-weight: bold;
  color: black;
}
nav a.router-link-active {
  color: red;
}
</style>
