<template>
  <ul
    class="list-none w-full flex items-center justify-between font-semibold max-w-96"
    :class="{ 'text-white': store.isDarkModeEnabled, 'text-black': !store.isDarkModeEnabled }"
  >
    <li>
      <button
        class="hover:underline hover:text-gray-500 p-4 cursor-pointer"
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        First
      </button>
    </li>

    <li>
      <button
        class="hover:underline hover:text-gray-500 p-4 cursor-pointer"
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li
      v-for="page in pages"
      :key="page.name"
    >
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        class="rounded-full flex items-center justify-center w-6 h-6 p-4 cursor-pointer"
        :class="{ 'active': isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li>
      <button
        class="hover:underline hover:text-gray-500 p-4 cursor-pointer"
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </li>

    <li>
      <button
        class="hover:underline hover:text-gray-500 p-4 cursor-pointer"
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        Last
      </button>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue';
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();

const emit = defineEmits(['pageChanged']);

const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3
  },
  totalPages: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
});

const startPage = computed(() => {
  const calculatedStart = Math.max(1, props.currentPage - Math.floor(props.maxVisibleButtons / 2));

  const adjustedStart = Math.max(1, Math.min(calculatedStart, props.totalPages - props.maxVisibleButtons + 1));

  return Math.max(1, adjustedStart);
});

const pages = computed(() => {
  const range = [];

  for (
    let i = startPage.value;
    i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
    i++
  ) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage
    });
  }

  return range;
});

const isInFirstPage = computed(() => props.currentPage === 1);
const isInLastPage = computed(() => props.currentPage === props.totalPages);

const onClickFirstPage = () => {
  emit('pageChanged', 1);
};

const onClickPreviousPage = () => {
  if (props.currentPage > 1) {
    emit('pageChanged', props.currentPage - 1);
  }
};

const onClickPage = (page) => {
  emit('pageChanged', page);
};

const onClickNextPage = () => {
  emit('pageChanged', props.currentPage + 1);
};

const onClickLastPage = () => {
  emit('pageChanged', props.totalPages);
};

const isPageActive = (page) => {
  return props.currentPage === page;
};
</script>
<style scoped>
  .active {
    background-color: #4AAE9B;
    color: #ffffff;
  }
</style>
