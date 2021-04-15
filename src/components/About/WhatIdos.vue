<template>
  <div class="p-2">
    <div class="flex flex-row p-2">
      <div>
        <img class="h-7 w-7 md:h-10 md:w-10" :src="whatIdos.icon" />
      </div>&nbsp;
      <div class="text-left font-semibold text-xl md:text-3xl">
        {{ whatIdos.title }}
      </div>
    </div>

    <div class="text-left">
      {{ whatIdos.description }}
    </div>
  </div>
</template>

<script>
// import webdesign from '../assets/svg/whatIdos/webdesign.svg'
export default {
  props: ["whatIdos"],
};
</script>