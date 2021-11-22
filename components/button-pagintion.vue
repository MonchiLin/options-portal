<template>
  <div
      class="
        <md:hidden
        w-full flex flex-row justify-end items-center font-medium
      "
  >
    <div
        @click="handlePrevClick"
        class="button-paging-control bg-[#F6F6F6] h-[45px] w-[45px] ml-[20px] flex flex-row items-center justify-center"
        :class="[hasPrev && 'button-paging-control--active bg-orange']"
    >
      <ios-arrow-round-back-icon w="30px" h="30px"/>
    </div>

    <div
        v-for="(_, index) of pageTotal"
        :key="index"
        class="button-paging-control h-[45px] w-[45px] ml-[10px] flex flex-row items-center justify-center"
        :class="[index === pageIndex - 1 ? 'text-white bg-blue' : 'text-[#BBBBBB] bg-[#F6F6F6]']"
    >
      {{ index + 1 }}
    </div>

    <div
        @click="handleNextClick"
        class="button-paging-control bg-[#F6F6F6] h-[45px] w-[45px] ml-[10px] flex flex-row items-center justify-center"
        :class="[hasNext && 'button-paging-control--active bg-orange']"
    >
      <ios-arrow-round-forward-icon w="30px" h="30px"/>
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

.button-paging-control {
  cursor: pointer;

  .ion {
    fill: #888888;
  }
}

.button-paging-control--active {

  .ion {
    fill: #217BF4;
  }
}

</style>
