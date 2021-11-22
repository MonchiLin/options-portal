<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(flex-col pt-[30px] justify-start)
          justify-between pb-[60px] pt-[60px]
          bg-cover flex flex-col items-center page-content
        "
    >

      <p class="text-[35px] font-black <md:(text-[20px]) text-primary">{{ text.t1 }}</p>

      <the-stpes :steps="steps"/>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import BluePointer from "../blue-pointer.vue";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import TheStpes from "~/components/the-stpes.vue";

export default defineComponent({
  components: {
    TheStpes,
    ThePart,
    BluePointer
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Ready to trade?",
      t2: "Open an account"
    })

    const steps = reactive([
      {
        label: "Open an account",
        description: "Register as a Swisstrade member, log in or consult customer service ",
      },
      {
        label: "Choose financial products",
        description: "Choose the financial products you want to invest in according to your needs ",
      },
      {
        label: "Invest Now",
        description: "Click the \"Invest Now\" button to start your financial management",
      },
    ])

    return {
      mq,
      text,
      steps
    }
  }
})

</script>

<style lang="scss">


</style>

