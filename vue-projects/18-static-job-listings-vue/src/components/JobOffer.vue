<template>
  <div 
    class="p-6 lg:p-8 mt-20 rounded-md relative shadow-proj-18 shadow-proj-18-desaturated-dark-cyan lg:flex lg:items-center lg:justify-between"
    :class="{ 
      'border-l-8 border-proj-18-desaturated-dark-cyan': info.isFeatured,
      'border-none': !info.isFeatured
    }"
  >
    <div>
      <img :src="info.logo" alt="Logo img" class="w-16 h-16 absolute -top-8 left-4">
      <div class="flex items-center flex-wrap lg:flex-nowrap mt-4">
        <span class="font-bold text-proj-18-desaturated-dark-cyan mr-8 mt-2">{{ info.company }}</span>
        <div class="mt-2">
          <span v-if="info.isNew" class="mr-3 py-2 px-3 bg-proj-18-desaturated-dark-cyan rounded-2xl text-white font-semibold">NEW!</span>
          <span v-if="info.isFeatured" class="py-2 px-3 bg-black rounded-2xl text-white font-semibold">FEATURED</span>
        </div>
      </div>
      <div class="font-semibold mt-6 hover:text-proj-18-desaturated-dark-cyan cursor-pointer">{{ info.position }}</div>
      <div class="flex items-center mt-2 text-gray-500 font-medium">
        <span>{{ info.postedAt }}</span>
        <span class="mx-2">•</span>
        <span>{{ info.contract }}</span>
        <span class="mx-2">•</span>
        <span>{{ info.location }}</span>
      </div>
    </div>
    <div>
      <div class="border border-slate-400 mt-4 lg:border-none lg:m-0"></div>
      <div class="flex items-center flex-wrap mt-1">
        <JobTypeChip v-if="info.level" :label="info.level" :is-removable="false" class="mr-3 mt-4" />
        <JobTypeChip v-for="(tool, index) in info.tools" :key="index" :is-removable="false" :label="tool" class="mr-3 mt-4" />
        <JobTypeChip v-for="(language, index) in info.languages" :key="index" :is-removable="false" :label="language" class="mr-3 mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
import JobTypeChip from './JobTypeChip.vue';
export default {
  props: {
    info: {
      type: Object,
      required: true,
      default: () => ({
        company: '',
        logo: '',
        isNew: false,
        isFeatured: false,
        position: '',
        role: '',
        level: '',
        postedAt: '',
        contract: '',
        location: '',
        languages: [],
        tools: [],
      }),
    },
  },
  components: {
    JobTypeChip
  },
}
</script>

<style>

</style>