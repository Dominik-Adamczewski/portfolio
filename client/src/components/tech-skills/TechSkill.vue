<script setup>
import { defineProps } from 'vue';
import LvlCircles from './LvlCircles.vue';

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="flex items-center justify-between">
    <div class="max-w-1/2">
      {{ props.skill.name }}
    </div>
    <div>
      <span>
        <LvlCircles :lvl="props.skill.lvl" />
      </span>
    </div>
  </div>
</template>