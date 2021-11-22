<template>
  <div
      class="
            <md:(flex-col justify-start w-full)
            justify-between flex
          "
  >

    <div
        class="relative <md:(w-full flex-row) flex flex-col mb-[30px]"
        v-for="(item, index) of steps"
        :key="index"
        :style="{ width: mq.mobile ? '100%' : ((100 / steps.length) - 2) + '%' }"
    >
      <!--   点   -->
      <div class="flex flex-row w-full items-center relative <md:(items-start w-auto flex-col)">
        <div class="rounded-full w-[24px] h-[24px] bg-blue flex-shrink-0"/>
        <div
            v-if="index + 1 < steps.length"
            style="border-color: rgb(33 123 244 / 80%);"
            class="
              <md:(mt-[20px] ml-0 w-1 h-full top-0 self-center left-[-1px] border-top-[0px] border-left-[3px])
              ml-[20px] w-full h-1 top-[1px] border-top-[3px]
              opacity-80 border-dashed relative
            "
        />
      </div>

      <div class="flex flex-col <md:(pt-[0px] pl-[16px]) pt-[16px]">
        <p class="text-[20px] font-medium text-primary">
          {{ item.step }}
        </p>
        <div class="min-h-[104px] pt-[8px] text-primary text-16px leading-[26px]">{{ item.description }}</div>
        <img
            :src="item.image"
            class="w-full"
        />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";

export default defineComponent({
  props: {
    steps: Array,
  },
  setup() {
    const mq = useMediaQuery()

    return {
      mq
    }
  }
})

</script>

<style lang="scss">


</style>

