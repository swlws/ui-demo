<template>
  <div>
    <div>slot test</div>
    <hello-world-vue :msg="'123213'"/>
    <Wrapper>
      <component v-for="(name, i) in list" :key="i" :is="name" />
    </Wrapper>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Wrapper from "./wrapper.vue";
import Demo1 from "./demo1.vue";
import Demo2 from "./demo2.vue";

const list = reactive([Demo1, Demo2, Demo2]);

let len = 10;

const timer = setInterval(() => {
  if (len-- < 0) clearInterval(timer);
  list.push(Demo2);
}, 1000);
</script>
