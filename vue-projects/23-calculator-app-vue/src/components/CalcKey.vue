<template>
  <button 
    class="w-full h-16 rounded-md flex items-center justify-center text-2xl font-semibold custom-shadow cursor-pointer"
    :class="keyClass"
    @click="handleKeyClick"
  >
    {{ props.keyObject.label }}
  </button>
</template> 

<script setup>
import { defineProps, computed, defineEmits } from 'vue';
import { calcStore } from '../stores/calcStore';

const store = calcStore();

const emit = defineEmits(['keyClick']);

const props = defineProps({
  keyObject: Object,
});

const handleKeyClick = () => {
  if (props.keyObject.type === 'reset') {
    store.resetCalculator();
  }

  if (props.keyObject.type === 'delete') {
    store.handleDelKey();
  }

  if (props.keyObject.type === 'equals') {
    store.calculateExpression();
  }

  return emit('keyClick', props.keyObject);
}

const keyClass = computed(() => {
  const theme = store.activeTheme;

  if (props.keyObject.type === 'reset' || props.keyObject.type === 'delete') {
    return [
      theme.keysClasses.actionKeysBackground,
      theme.keysClasses.actionKeysShadow,
      theme.keysClasses.actionKeysHover,
      theme.keysClasses.actionKeysActive,
      theme.textClasses.keyText,
    ];
  } else if (props.keyObject.type === 'equals') {
    return [
      theme.keysClasses.mainKeyBackground,
      theme.keysClasses.mainKeyShadow,
      theme.keysClasses.mainKeyHover,
      theme.keysClasses.mainKeyActive,
      theme.textClasses.keyText,
    ];
  } else {
    return [
      theme.keysClasses.numericKeysBackground,
      theme.keysClasses.numericKeysHover,
      theme.keysClasses.numericKeysActive,
      theme.keysClasses.numericKeysShadow,
      theme.textClasses.keyText,
    ];
  }
});
</script>

<style>
  .custom-shadow {
    box-shadow: 0px 4px;
  }
</style>
