<template>
  <div
      class="
        w-[350px] rounded-[10px]
        flex-shrink-0 relative
      "
      :class="[
          isPrimary ? 'text-white bg-blue h-[643px]' : 'text-secondary bg-white h-[583px]',
      ]"
  >
    <!--  标题  -->
    <div
        class="flex flex-row absolute top-[30px] px-[20px] "
        :class="[isPrimary ? 'pt-[30px] text-white' : 'text-blue']"
    >
      <span
          class="text-[74px] font-bold"
      >
        {{ config.annualEarnings }}
      </span>
      <div class="flex flex-col ml-[8px] justify-center">
        <span class="text-[20px] font-bold">%</span>
        <span class="text-[16px]">Annual earnings</span>
      </div>
    </div>

    <!--  描述  -->

    <div
        class="absolute top-[144px] px-[20px]"
        :style="{ top: isPrimary ? '177px' : '144px' }"
    >
      <p class="text-[18px] font-bold">{{ config.t1 }}</p>
      <p class="text-[16px] leading-[24px] pt-[10px]">{{ config.t2 }}</p>
    </div>

    <!--  列表  -->

    <ul
        class="font-semibold absolute px-[20px]"
        :style="{ top: isPrimary ? '340px' : '313px' }"
    >
      <li v-for="item of config.descriptions" :key="item" class="flex flex-row items-center pt-[15px]">
        <div class="h-full self-start mt-[3px]">
          <blue-pointer
              :inner-color="isPrimary ? 'white' : undefined"
              :outer-color="isPrimary ? 'rgb(255 255 255 / 10%)' : undefined"
          />
        </div>
        <span class="pl-[10px] text-[14px]">{{ item }}</span>
      </li>
    </ul>

    <div
        class="absolute px-[20px] w-full"
        :style="{ bottom: isPrimary ? '65px' : '35px' }"
    >
      <button
          class="w-full py-[15px] rounded-[6px] font-bold"
          :class="[isPrimary ? 'bg-white text-blue' : 'bg-blue text-white']"
      >
        Invest now
      </button>
    </div>


  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import BluePointer from "~/components/blue-pointer.vue";
import { useMediaQuery } from "~/utils/shared";

export default defineComponent({
  components: {BluePointer},
  props: {
    theme: String as PropType<"primary" | "secondary">,
    config: Object
  },
  setup(props) {
    const mq = useMediaQuery()
    const offset = 643 - 583
    const isPrimary = computed(() => props.theme === 'primary')


    return {
      mq,
      offset,
      isPrimary
    }
  }
})

</script>
