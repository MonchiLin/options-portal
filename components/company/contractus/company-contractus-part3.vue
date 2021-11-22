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
import { useMediaQuery } from "~/utils/shared";
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

    const locations = reactive([
      {
        name: "UK headquarters",
        location: "27-31 Melville Street-Edinburgh UK-EH3 7JF",
      },
      {
        name: "India branch",
        location: "D Block, Connaught Place, New Delhi, Delhi 110001",
      },
      {
        name: "Canadian branch",
        location: "Toronto-Foyston, Gordon & Payne Inc.-1 Adelaide Street East, Suite 2600-Toronto, ON M5C 2V8",
      },
      {
        name: "New Zealand branch",
        location: "Level 1, Meridian Building-55 Lady Elizabeth Lane-Queens Wharf-Wellington 6011",
      },
      {
        name: "Singapore branch",
        location: "1 Wallich Street #15-01-Guoco Tower-Singapore 078861",
      },
    ])

    return {
      text,
      locations,
      mq,
    }
  }
})

</script>

<style lang="scss">

</style>

