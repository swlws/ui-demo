<template>
  <button @click="send('Post')">post data</button>
  <button @click="send('Delete')">delete data</button>
  <button @click="send('Get')">get data</button>
  <button @click="send('Put')">put data</button>

  <main>data:{{ res }}</main>
</template>

<script setup lang="ts">
import request from "@/lib/alova";
import { ref } from "vue";
const res = ref({});

function send(type: string) {
  doSend(type);
}

async function doSend(type: string) {
  const ins = request[type]("/api/test", {
    params: {
      id: 1,
    },
  });
  // .send();

  res.value = await ins.send();
}
</script>
