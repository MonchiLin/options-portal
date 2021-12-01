<template>
  <the-part
      background-for-md="/company/faq/part1/bg_m.png"
      background="/company/faq/part1/bg.png"
  >
    <div
        class="
          <md:(h-[355px])
          h-[456px]
          page-content flex items-center text-white flex-col justify-center
        "
    >

      <h3 class="<md:(text-[34px]) text-[44px] leading-[75px] font-black">{{ text.t1 }}</h3>
      <h4 class="<md:(text-[14px] leading-[28px] w-full) w-[500px] text-[18px] leading-[28px] text-center opacity-80 mt-[11px]">{{ text.t2 }}</h4>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {ThePart},
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "FAQ",
      t2: "We’ll help answer your questions so that you can\n" +
          "get started trading today",
    })

    return {
      mq,
      text
    }
  }
})

</script>
