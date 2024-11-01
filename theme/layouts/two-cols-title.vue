<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout two-cols-title" :class="props.layoutClass">
    <slot name="title"  />
    <div class="two-columns w-full grid grid-cols-2" :class="props.layoutClass">

      <div class="col-left" :class="props.class">
        <slot name="left"  />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>