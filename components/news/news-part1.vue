<template>
  <the-part
      background-for-md="/news/part1/bg_m.png"
      background="/news/part1/bg.png"
  >
    <div
        class="
          <md:(h-[355px])
          h-[456px]
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
      t1: "News"
    })

    return {
      mq,
      text
    }
  }
})

</script>
