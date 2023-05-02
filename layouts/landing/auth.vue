<template>
  <div>
    <v-style>
      @import '/assets/landing/css/theme-color/default-theme.css';
      @import '/style/style.css';
      @import '/style.css';
    </v-style>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: 'auth',
    }
</script>

<style scoped>

</style>
