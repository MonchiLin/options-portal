<template>
  <the-part
      background-for-md="/products/part1/bg_m.png"
      background="/products/part1/bg.png"
  >
    <div
        class="
          <md:(h-[837px])
          h-[600px]
          page-content flex items-center text-white flex-col justify-center
        "
    >

      <h3 class="<md:(text-[34px]) text-[44px] leading-[75px] text-white font-black">{{ text.t1 }}</h3>
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {ThePart},
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Ideal trading platform for the world's investors",
      t2: "The financial goal of every individual is different. At Steadyoption, we conduct thorough research to zero in on the right mutual fund scheme for you. Steady fund recommendations are based on an in-depth analysis of various categories of equity and debt mutual fund schemes. ",
      t3: "Download App",
    })

    return {
      mq,
      text
    }
  }
})

</script>
