<template>
    <div>
      <h3>{{ sectionName }}</h3>
      <p>This is the content for {{ sectionName }}.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      sectionName: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  