<template>
  <div>title : {{ title }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const title = ref("this is home page");
</script>
