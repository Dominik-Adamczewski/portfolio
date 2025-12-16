<template>
  <div class="min-h-screen bg-proj-16-light-grayish-cyan text-gray-600 flex flex-col justify-center items-center">
    <div class="max-w-screen-lg w-full p-4">
      <h1 class="text-3xl font-bold flex items-center justify-center mb-10 mx-auto">SPLI<br>TTER</h1>
      <div class="h-full w-full bg-white flex-grow lg:max-w-screen-md mx-auto lg:rounded-md">
        <TipCalculator />
      </div>
    </div>
  </div>
</template>

<script>
import TipCalculator from './components/TipCalculator.vue';
export default {
  name: 'App',
  components: { TipCalculator }
}
</script>
