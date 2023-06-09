<template>
  <div ref="boxRef">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
const boxRef = ref();

let observe: MutationObserver;

onMounted(() => {
  console.log(boxRef.value);

  observe = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      const { addedNodes } = mutation;

      console.log(addedNodes);
    }
  });

  observe.observe(boxRef.value as any, {
    childList: true,
    subtree: false,
    attributes: false,
  });
});

onUnmounted(() => {
  if (observe) observe.disconnect();
});
</script>
