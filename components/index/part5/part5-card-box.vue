<template>
  <div class="w-full">
    <div
        class="
          <md:(flex-col)
          flex-row justify-evenly w-full
          flex items-center
        "
    >
      <part5-card class="<md:mb-[30px]" :config="current[0]" theme="secondary"/>
      <part5-card class="<md:mb-[30px]" :config="current[1]" :theme="prominent"/>
      <part5-card :config="current[2]" theme="secondary"/>
    </div>

    <pagintion class="mt-[20px]" v-model:page-index="paging.pageIndex" :page-total="paging.pageTotal"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from "vue";
import Part5Card from "~/components/index/part5/part5-card.vue";
import { useMediaQuery } from "~/utils/shared";
import chunk from "lodash-es/chunk";
import Pagintion from "~/components/pagintion.vue";

export default defineComponent({
  components: {Pagintion, Part5Card},
  props: {
    configs: Object
  },
  setup(props) {
    const mq = useMediaQuery()
    const chunks = computed(() => {
      return chunk(props.configs, 3)
    })

    const paging = reactive({
      pageIndex: 1,
      pageTotal: 1
    })

    watch(chunks, () => {
      paging.pageTotal = chunks.value.length
    }, {immediate: true})

    const current = computed(() => chunks.value[paging.pageIndex - 1] || [])

    const prominent = computed(() => (current.value.length === 3 && mq.desktop) ? 'primary' : 'secondary')

    return {
      mq,
      chunks,
      paging,
      current,
      prominent
    }
  }
})

</script>
