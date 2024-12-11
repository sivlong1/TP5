<template>
    <aside>
      <ul>
        <li><router-link :to="$route.path + '/section1'">Section 1</router-link></li>
        <li><router-link :to="$route.path + '/section2'">Section 2</router-link></li>
        <li><router-link :to="$route.path + '/section3'">Section 3</router-link></li>
        <li><router-link :to="$route.path + '/section4'">Section 4</router-link></li>
      </ul>
    </aside>
  </template>
  
  <style>
  aside {
    background-color: #f4f4f4;
    padding: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  </style>
  