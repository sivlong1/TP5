<template>
    <div>
      <Menu />
      <main>
        <h2>Welcome to Page 2</h2>
        <router-view />
      </main>
    </div>
  </template>
  
  <script>
  import Menu from '../components/Menu.vue';
  
  export default {
    components: { Menu },
  };
  </script>
  