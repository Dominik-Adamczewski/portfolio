<script setup>
const props = defineProps({
  isExpanded: { type: Boolean, required: true },
  threshold: { type: Number, default: 4 },
  itemCount: { type: Number, required: true },
  maxHeight: { type: String, default: 'max-h-48' },
  fromColor: { type: String, default: 'from-white' }
});

const emit = defineEmits(['toggle']);
</script>

<template>
  <div>
    <div
      class="relative overflow-hidden"
      :class="[props.isExpanded ? 'max-h-max' : props.maxHeight]"
    >
      <slot />
      
      <div
        v-if="props.itemCount > props.threshold && !props.isExpanded"
        class="absolute bottom-0 left-0 w-full pt-16 pb-2 px-2 flex justify-center bg-linear-to-t to-transparent"
        :class="props.fromColor"
      >
        <button
          @click="emit('toggle')"
          class="text-sm font-semibold text-portfolio-primary-blue hover:underline cursor-pointer"
        >
          + Show more
        </button>
      </div>
    </div>
    <div v-if="props.itemCount > props.threshold && props.isExpanded" class="flex justify-center mt-4">
      <button
        @click="emit('toggle')"
        class="text-sm font-semibold text-portfolio-primary-blue hover:underline cursor-pointer"
      >
        - Show less
      </button>
    </div>
  </div>
</template>