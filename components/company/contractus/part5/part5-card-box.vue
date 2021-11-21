<template>
  <div
    class="
      <md:(flex-col)
      flex-row justify-between w-full
      flex items-center
    "
  >
    <part5-card class="<md:mb-[30px]" :config="configs[0]" theme="secondary"/>
    <part5-card class="<md:mb-[30px]" :config="configs[1]" :theme="mq.mobile ? 'secondary' : 'primary'"/>
    <part5-card :config="configs[2]" theme="secondary"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Part5Card from "~/components/index/part5/part5-card.vue";
import { useMediaQuery } from "~/utils/shared";

export default defineComponent({
  components: {Part5Card},
  props: {
    configs: Object
  },
  setup() {
    const mq = useMediaQuery()

    return {
      mq
    }
  }
})

</script>
