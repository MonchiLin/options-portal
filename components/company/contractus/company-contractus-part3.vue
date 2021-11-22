<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(py-[24px])
          flex-col py-[40px]
          flex page-content
        "
    >
      <div class="<md:(py[24px] flex-col-reverse) flex flex-row">

        <div
            class="
            <md:(w-full)
            w-[50%]
            flex flex-col
          "
        >

          <div
              v-for="(item, index) of locations"
              :key="index"
              class="flex flex-row items-center mt-[30px]"
          >
            <img class="w-[24px] h-[24px] self-start" src="/company/contractus/part3/Location.png" alt="">
            <div class="flex flex-col ml-[16px]">
              <p class="text-[18px] font-black text-primary">{{ item.name }}</p>
              <p class="mt-[10px] text-[18px] text-secondary">{{ item.location }}</p>
            </div>
          </div>

        </div>

        <img class="<md:(w-full) w-[500px] h-[476px]" src="/company/contractus/part3/building.png" alt="">

      </div>

      <div class="flex flex-row mt-[20px] items-center flex-wrap <md:(flex-col items-start)">
        <span class="text-[16px] font-black">{{ text.t1 }}</span>
        <div class="pl-[68px] flex flex-row items-center <md:(pl-0 mt-[16px])">
          <img
              style="filter: drop-shadow(0px 13px 18px rgba(17, 19, 35, 0.08))"
              class="w-[34px] h-[34px]" src="/company/contractus/part3/Facebook.png" alt="">
          <img
              style="filter: drop-shadow(0px 13px 18px rgba(17, 19, 35, 0.08));"
              class="ml-[20px] w-[34px] h-[34px]" src="/company/contractus/part3/chat.png" alt="">
          <img
              style="filter: drop-shadow(0px 13px 18px rgba(17, 19, 35, 0.08))"
              class="ml-[20px] w-[34px] h-[34px]" src="/company/contractus/part3/Twitter.png" alt="">
        </div>
      </div>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import isNil from 'lodash-es/isNil'

export default defineComponent({
  components: {
    ThePart,
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "You Can also Connect with Us"
    })

    const locations = reactive([
      {
        name: "UK headquarters",
        location: "27-31 Melville Street-Edinburgh UK-EH3 7JF",
      },
      {
        name: "India branch",
        location: "D Block, Connaught Place, New Delhi, Delhi 110001",
      },
      {
        name: "Canadian branch",
        location: "Toronto-Foyston, Gordon & Payne Inc.-1 Adelaide Street East, Suite 2600-Toronto, ON M5C 2V8",
      },
      {
        name: "New Zealand branch",
        location: "Level 1, Meridian Building-55 Lady Elizabeth Lane-Queens Wharf-Wellington 6011",
      },
      {
        name: "Singapore branch",
        location: "1 Wallich Street #15-01-Guoco Tower-Singapore 078861",
      },
    ])

    return {
      text,
      locations,
      mq,
    }
  }
})

</script>

<style lang="scss">

</style>

