<template>
  <the-part
      background-color="white"
  >
    <the-locations-and-building
        class="
          <md:(pb-[24px])
          flex-col pb-[40px]
          flex page-content
        "
    />
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import {useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import isNil from 'lodash-es/isNil'
import TheLocationsAndBuilding from "~/components/the-locations-and-building.vue";


export default defineComponent({
  components: {
    TheLocationsAndBuilding,
    ThePart,
  },
   setup() {
    const mq = useMediaQuery()
    
    const text = reactive({
      t1: "You Can also Connect with Us"
    })

    

    return {
      text,
      mq,
    }
  }
})

</script>

<style lang="scss">

</style>

