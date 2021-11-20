<template>
  <the-part
      background-for-md="url(/index/part5/background_mobile.png)"
      background="url(/index/part5/background.png)"
  >
    <div
        class="
          <md:(h-auto py-[23px])
          h-[900px] py-[30px]
          flex items-center page-content flex-col
        "
    >

      <p class="<md:(text-[20px]) text-[35px] font-black text-white">
        {{ text.t1 }}
      </p>

      <p class="<md:(text-[14px]) text-[18px] pt-[18px] text-white">
        {{ text.t2 }}
      </p>


    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {
    ThePart
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Popular financial products",
      t2: "Partners for wealth creation",
    })


    return {
      mq,
      text,
    }
  }
})

</script>

<style lang="scss">

</style>

