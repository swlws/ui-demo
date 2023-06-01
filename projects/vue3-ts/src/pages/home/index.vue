<template>
  <div :style="{backgroundColor: `#${Math.floor(Math.random()*99)}${Math.floor(Math.random()*99)}${Math.floor(Math.random()*99)}`}" :data-pid="10">
    <div>title : {{ title }}</div>
  
    <p>count: {{ count }}</p>
    <div>
      <button @click="random">add</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const title = ref("this is home page");
const count = ref(0)
function random () {
  count.value ++
}

</script>
