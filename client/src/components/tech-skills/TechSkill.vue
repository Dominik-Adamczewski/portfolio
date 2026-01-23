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
  <div class="w-full bg-white rounded-md p-4">
    <div class="flex itemst-center justify-between">
      <div>
        {{ props.skill.name }}
      </div>
      <div>
        <span>
          <LvlCircles :lvl="props.skill.lvl" />
        </span>
      </div>
    </div>
  </div>
</template>