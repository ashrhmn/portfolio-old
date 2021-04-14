<template>
  <div class="p-5 flex space-x-2">
    <div class="">
      <component class="h-16 w-16" :is="item.icon"></component>
    </div>
    <div class="flex-col space-y-2">
      <div class="text-left text-xl md:text-3xl font-bold">{{ item.data }}</div>
      <div class="text-lg text-left md:text-2xl">{{ item.subData }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["item"],
};
</script>