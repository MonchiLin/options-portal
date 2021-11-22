<template>
  <the-part
      background-for-md="/products/part1/bg_m.png"
      background="/products/part1/bg.png"
  >
    <div
        class="
          <md:(h-[355px])
          h-[456px]
          page-content flex items-center text-white flex-col justify-center
        "
    >

      <h3 class="<md:(text-[34px]) text-[44px] text-white font-black">{{ text.t1 }}</h3>
      <h3 class="pt-[15px] <md:(text-[14px]) text-[18px] text-white opacity-80">{{ text.t2 }}</h3>
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
      t1: "Product",
      t2: "Competitive documentary financial products ",
    })

    return {
      mq,
      text
    }
  }
})

</script>
