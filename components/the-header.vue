<template>
  <div class="bg-blue w-full flex flex-row justify-center">
    <div class="page-content flex flex-row items-center <md:justify-between justify-center h-[72px]">

      <div class="flex flex-row items-center">
        <img src="assets/the-header/logo.png" class="w-[28px] h-[28px]"/>
        <h1 class="pl-[12px] text-white">
          <a href="/">QIQUAN</a>
        </h1>
      </div>

      <div class="<md:hidden flex-1">
        <template v-for="(item, index) of navs" :key="item.title">
          <a
              :class="[activeRouteIndex === index ? 'text-orange' : 'text-white','md:pl-[20px]', 'pl-[32px]']"
              :href="item.link"
          >
            {{ item.title }}
          </a>
        </template>
      </div>

      <button
          class="<md:hidden font-medium flex flex-row items-center px-[10px] h-[40px] py-[20px] bg-white width-[136px] rounded-[6px] text-[#2368E1]">
        Open Account
      </button>

      <img class="<md:block <lg:hidden cursor-pointer w-[25px]" src="assets/the-header/icons8-menu_rounded.png" alt="">

    </div>
  </div>
</template>

<script lang="ts">
import { useMediaQuery } from "~/utils/shared";
import { reactive, defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const mq = useMediaQuery()
    const navs = reactive([
      {title: "Home", linkKind: "link", link: "/"},
      {title: "Company", linkKind: "dropdown", link: "#"},
      {title: "Download", linkKind: "link", link: "download"},
      {title: "Products", linkKind: "link", link: "products"},
      {title: "News", linkKind: "link", link: "news"},
    ])

    const route = useRoute()

    const activeRouteIndex = computed(() => {
      const path = route.path
      if (path === "/" || path === "/index") {
        return 0
      }
      return 0
    })

    return {
      mq,
      navs,
      activeRouteIndex
    }
  }
})

</script>

<style lang="scss">


</style>
