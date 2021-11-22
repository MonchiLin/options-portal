<template>
  <the-locations-and-building/>
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

    return {

    }
  }
})

</script>

<style lang="scss">

</style>

