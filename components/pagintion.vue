<template>
  <div
      class="
      <md:hidden
      w-full flex flex-row justify-between items-center
    "
  >
    <div class="flex flex-row">
      <div
          v-for="(_, index) of pageTotal"
          :key="index"
          class="rounded-full h-[15px] ml-[15px] transition-all duration-400"
          :class="[index === pageIndex - 1 ? 'w-[40px] bg-orange' : 'w-[15px] bg-[#DDE0E4]']"
      />
    </div>

    <div class="flex flex-row">
      <div
          @click="handlePrevClick"
          class="paging-control rounded-full h-[60px] w-[60px] ml-[20px] flex flex-row items-center justify-center"
          :class="[hasPrev && 'paging-control--active bg-orange']"
      >
        <ios-arrow-round-back-icon w="40px" h="40px"/>
      </div>
      <div
          @click="handleNextClick"
          class="paging-control rounded-full h-[60px] w-[60px] ml-[20px] flex flex-row items-center justify-center"
          :class="[hasNext && 'paging-control--active bg-orange']"
      >
        <ios-arrow-round-forward-icon w="40px" h="40px"/>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import IosArrowRoundForwardIcon from 'vue-ionicons/dist/ios-arrow-round-forward.vue'
import IosArrowRoundBackIcon from 'vue-ionicons/dist/ios-arrow-round-back.vue'

export default defineComponent({
  components: {
    IosArrowRoundForwardIcon,
    IosArrowRoundBackIcon
  },
  props: {
    pageIndex: Number,
    pageTotal: Number,
  },
  setup(props, {emit}) {
    const hasNext = computed(() => props.pageIndex < props.pageTotal)
    const hasPrev = computed(() => props.pageIndex > 1)

    const handleNextClick = () => {
      hasNext.value && emit("update:pageIndex", props.pageIndex + 1)
    }
    const handlePrevClick = () => {
      hasPrev.value && emit("update:pageIndex", props.pageIndex - 1)
    }

    return {
      hasNext,
      hasPrev,
      handleNextClick,
      handlePrevClick,
    }
  }
})

</script>

<style scoped lang="scss">

.paging-control {
  border: 2px solid #EF7F3C;
  box-sizing: border-box;
  background: transparent;
  cursor: pointer;

  .ion {
    fill: #EF7F3C;
  }
}

.paging-control--active {
  background: #EF7F3C;

  .ion {
    fill: white;
  }
}

</style>
