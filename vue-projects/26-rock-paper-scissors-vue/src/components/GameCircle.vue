<template>
  <div
    v-if="!isEmpty"
    class="weapon border-8 lg:border-[20px] rounded-full bg-white h-32 md:h-40 lg:h-48 w-32 md:w-40 lg:w-48 flex items-center justify-center  duration-300"
    :class="{
      'border-proj-26-primary-blue-500': props.circleObj.type === 'paper',
      'top-0 md:-top-10 lg:-top-20 left-0 md:-left-10 lg:-left-24': props.circleObj.type === 'paper' && props.isOnChoosingWeaponScreen,
      'border-proj-26-primary-gold-500': props.circleObj.type === 'scissors',
      'top-0 md:-top-10 lg:-top-20 right-0 md:-right-10 lg:-right-24': props.circleObj.type === 'scissors' && props.isOnChoosingWeaponScreen,
      'border-proj-26-primary-red-600': props.circleObj.type === 'rock',
      'bottom-0 md:-bottom-10 lg:-bottom-20 left-1/2 -translate-x-1/2': props.circleObj.type === 'rock' && props.isOnChoosingWeaponScreen,
      'absolute': props.isOnChoosingWeaponScreen,
      'cursor-pointer hover:bg-gray-200': store.currentStep === 1
    }"
    @click="$emit('chooseWeapon', props.circleObj)"
  >
    <div :class="{'weapon-inner': store.currentStep === 1}">
      <img :src="props.circleObj.imgPath" :alt="props.circleObj.imgAlt">
    </div>
  </div>
  <div v-else class="rounded-full bg-proj-26-neutral-navy-900 h-32 w-32"></div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useGameStore } from '../stores/gameStore';

const store = useGameStore();

defineEmits(['chooseWeapon']);

const props = defineProps({
  circleObj: {
    type: Object,
    required: true
  },
  isEmpty: {
    type: Boolean,
    default: false
  },
  isOnChoosingWeaponScreen: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
  .weapon:hover .weapon-inner {
    animation-duration: 1.5s;
    animation-name: wave;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes wave {
    0%, 100% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(20deg);
    }
    20% {
      transform: rotate(-20deg);
    }
    30% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(0deg);
    }
  }
</style>
