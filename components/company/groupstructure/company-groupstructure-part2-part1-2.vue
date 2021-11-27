<template>
  <the-contracts
      class="
          <md:(pt-[30px] pb-[40px])
          pt-[60px] pb-[110px]
        "
        :siteInfo="siteInfo"
  >

  </the-contracts>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TheContracts from "~/components/the-contracts.vue";

export default defineComponent({
  components: {
    TheContracts,
  },
  setup() {

    return {}
  }
})

</script>

<style lang="scss">

</style>

