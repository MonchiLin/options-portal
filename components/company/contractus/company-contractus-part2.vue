<template>
  <the-part
      background-color="white"
  >
    <the-contracts
        class="
          <md:(pt-[20px] pb-[40px])
          pt-[120px] pb-[110px] page-content
        "
   :siteInfo="siteInfo" >

    </the-contracts>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import TabBar from "~/components/tab-bar.vue";
import TheContracts from "~/components/the-contracts.vue";

export default defineComponent({
  components: {
    TheContracts,
    ThePart,
  },
   props: {
    siteInfo: Object
  },
  setup(props) {
    const mq = useMediaQuery()
    const siteInfo=props.siteInfo
    return {
      mq,
      siteInfo
    }
  }
})

</script>

<style lang="scss">

</style>

