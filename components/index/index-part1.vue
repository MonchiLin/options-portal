<template>
  <section
      :style="{backgroundImage: mq.mobile ? 'url(/index/background_1_mobile.jpg)' : 'url(/index/background_1.png)'}"
      class="bg-cover pt-[60px] w-screen flex flex-col items-center"
  >
    <div
        class="
          <md:(flex-col pb-[34px] h-[700px] justify-start)
          h-[600px] justify-between flex-row
          page-content flex items-center text-white
        "
    >
      <img
          src="/index/meeting.png"
          class="
            <md:w-[300px]
            w-[460px]
          "
          alt=""
      >

      <div
          class="
          <md:(items-center pt-[30px])
          items-end
          flex flex-col
        "
      >
        <div
            class="
            <md:(text-[34px] text-center leading-[40px] w-[334px])
            text-right leading-[75px]
            text-[44px]
            font-black
          "
        >
          <p>{{ text.t1 }}</p>
          <p>{{ text.t2 }}</p>
        </div>
        <p
            class="
            <md:(pt-[35px] text-[14px] w-[238px] leading-[24px])
            text-[18px]
            opacity-80 pt-[11px] text-[18px]
          "
        >
          {{ text.t3 }}
        </p>

        <button
            class="
            <md:(mt-[30px])
            mt-[46px] w-[163px] h-[48px] bg-orange rounded-[6px]
          "
        >
          {{ text.t4 }}
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import { reactive } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "SteadyOption",
      t2: "Partners for wealth creation",
      t3: "Choose the right platform and you are half the battle",
      t4: "Invest now"
    })


    return {
      mq,
      text
    }
  }
})

</script>
