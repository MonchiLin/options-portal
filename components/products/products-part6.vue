<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(flex-col pb-[30px] pt-[30px])
          pt-[67px] pb-[60px]
          bg-cover flex flex-col page-content text-primary
        "
    >
      <h3 class="text-[35px] <md:(text-[20px] leading-[20px]) font-black">{{ text.t1 }}</h3>

      <img
          src="/products/part2/trading.png"
          class="w-full"
          alt=""
      />

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import BluePointer from "../blue-pointer.vue";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {
    ThePart,
    BluePointer
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Trader dynamics, you are in control",
    })

    return {
      mq,
      text
    }
  }
})

</script>

<style lang="scss">


</style>

