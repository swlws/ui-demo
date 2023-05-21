<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <nav>
      <router-link to="/request">Request</router-link>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
header {
  padding: 10px 0;
  border-bottom: 1px solid #e8e8e8;

  display: flex;
  > nav {
    margin: 0 10px;
  }
}

main {
  padding: 10px;
}
</style>
