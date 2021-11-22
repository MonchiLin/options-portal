<template>
  <the-part
      background-for-md="/company/faq/part3/bg_m.png"
      background="/company/faq/part3/bg.png"
  >
    <div
        class="
          <md:(pt-[20px] pb-[72px])
          flex-col pt-[73px] pb-[158px]
          flex justify-center page-content
        "
    >

      <p class="text-[35px] leading-[72px] font-black <md:(text-[20px] leading-[24px])">{{ text.t1 }}</p>

      <div
        class="
          <md:(flex-col justify-start)
          flex flex-row pt-[30px] justify-between
          w-full
        "
      >
        <div
            class="
              <md:(w-full py-[5px] px-[5px])
              w-[45%] py-[20px] px-[20px]
              flex flex-row justify-center rounded-[14px]
            "
            style="box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13);"
        >
          <img class="w-[76px] h-[76px]" :src="panels.p1.icon" alt="">
          <div class="flex flex-col justify-center">
            <p class="text-[24px] <md:(text-[12px])">{{ panels.p1.title }}</p>
            <p class="text-[16px] pt-[10px] <md:(text-[10px])">{{ panels.p1.description }}</p>
          </div>
        </div>

        <div
            class="
              <md:(w-full py-[5px] px-[5px] mt-[10px])
              w-[45%] py-[20px] px-[20px]
              flex flex-row justify-center rounded-[14px]
            "
            style="box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13);"
        >
          <img class="w-[76px] h-[76px]" :src="panels.p2.icon" alt="">
          <div class="flex flex-col justify-center">
            <p class="text-[24px] <md:(text-[12px])">{{ panels.p2.title }}</p>
            <p class="text-[16px] pt-[10px] <md:(text-[10px] pt-[6px])">
              <a class="text-blue" href="mailto: steadyoption@yahoo.com">steadyoption@yahoo.com</a>
              <span class="pl-[10px]">Send us your question</span>
            </p>
          </div>
        </div>
      </div>

      <button class="<md:(mt-[30px]) mt-[60px] w-[279px] bg-orange text-white rounded-[6px] py-[12px] flex items-center justify-center">
        {{ text.t2 }}
      </button>

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
      t1: "Did not find the answer?  You can consult us.",
      t2: "Contact us",
    })

    const panels = reactive({
      p1: {
        title: "Chat",
        description: "PREFERRED SERVICE consultants available 24/5",
        icon: "/company/faq/part3/Icon.png",
      },
      p2: {
        title: "E-Mail",
        description: "steadyoption@yahoo.com Send us your question",
        icon: "/company/faq/part3/Icon-1.png",
      },
    })

    return {
      panels,
      mq,
      text,
    }
  }
})

</script>

<style lang="scss">

</style>

