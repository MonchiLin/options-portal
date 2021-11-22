<template>
  <div
      class="
            <md:(flex-col justify-start w-full)
            pt-[40px] justify-between
            flex w-[1126px]
          "
  >

    <div
        class="w-[30%] relative <md:(w-full) flex flex-col items-center mb-[30px]"
        v-for="(item, index) of steps"
        :key="index"
    >
      <div
          class="text-[40px] font-black w-[80px] h-[80px] rounded-full bg-[#F4F5F7] text-blue flex justify-center items-center">

        <!--       连接线   -->

        <img
            class="<md:(hidden) absolute h-[16px] w-[252px] left-[240px]"
            v-if="index + 1 < steps.length"
            src="/download/part3/joint-line.png"
        />

        <!--       连接线结束   -->

        {{ index + 1 }}
      </div>
      <p class="text-[#18191F] text-[24px] leading-[30px] <md:(text-[24px] leading-[30px]) pt-[16px] font-medium">
        {{ item.label }}</p>
      <p class="text-secondary text-center pt-[16px] text-[16px] leading-[26px]">{{ item.description }}</p>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    steps: Array,
  },
  setup() {

    return {

    }
  }
})

</script>

<style lang="scss">


</style>

