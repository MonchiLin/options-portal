<template>
  <index :siteInfo="siteInfo"/>
</template>

<script lang="ts">
import Index from './index.vue'
import { publicMethod} from "~/utils/shared";
export default {
  components: {
    Index
  },
   async setup() {
    const siteInfo=await publicMethod.getSiteInfo()
    return {
      siteInfo
    }
  }
}

</script>
