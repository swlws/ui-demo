<script setup lang="ts">
import { ref } from "vue";
import { formatDate, useManualRefHistory } from "@vueuse/core";

function format(ts: number) {
  return formatDate(new Date(ts), "YYYY-MM-DD HH:mm:ss");
}

const data = ref({});

function change() {
  data.value = {
    mk: Math.random() * 100,
  };
}

const { canUndo, canRedo, history, commit, undo, redo } = useManualRefHistory(
  data,
  { capacity: 10 }
);
</script>

<template>
  <div>Count: {{ data }}</div>

  <button @click="change()">change</button>

  <span class="ml-2">/</span>
  <button @click="commit()">Commit</button>
  <button :disabled="!canUndo" @click="undo()">Undo</button>
  <button :disabled="!canRedo" @click="redo()">Redo</button>
  <br />
  <br />
  <note>History (limited to 10 records for demo)</note>
  <div class="code-block mt-4">
    <div v-for="i in history" :key="i.timestamp">
      {{ i }}
      <span class="opacity-50 mr-2 font-mono">{{ format(i.timestamp) }}</span>
      <span class="font-mono">{ value: {{ i.snapshot }} }</span>
    </div>
  </div>
</template>
