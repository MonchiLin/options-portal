<template>
  <div
      class="
        <md:(w-full)
        rounded-[6px] flex flex-row justify-between items-center h-[62px] px-[8px] py-[8px]
      "
      style="border: 1px solid #E8E9EB;"
  >
    <div
        v-for="(item, i) of items"
        :key="i"
        class="
          <md:(min-w-[80px] text-[12px])
          min-w-[148px] text-[16px] transition-all duration-400 h-full rounded-[6px] cursor-pointer flex justify-center items-center
        "
        :class="[i === index ? 'text-secondary bg-white' : 'text-white ']"
        @click="handleItemClick(i)"
    >
      {{ item }}
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    items: Array as PropType<string[]>,
    index: Number
  },
  setup(props, {emit}) {
    const handleItemClick = (i) => {
      emit("update:index", i)
    }

    return {
      handleItemClick
    }
  }
})

</script>

<style scoped lang="scss">

</style>
