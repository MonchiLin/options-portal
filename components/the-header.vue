<template>
  <header
      class="bg-transparent absolute w-full flex flex-row justify-center"
      :class="[visible && '<md:bg-blue']"
  >
    <div
        class="page-content flex flex-row items-center <md:justify-between justify-center h-[72px]"
        :style="{ zIndex: visible ? 10000 : 1 }"
    >

      <div class="flex flex-row items-center">
        <img src="/the-header/logo.png" class="w-[28px] h-[28px]"/>
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
            <template v-if="item.linkKind === 'link'">
              {{ item.title }}
            </template>
            <template v-else-if="item.linkKind === 'dropdown'">
              <span @click="onMenuClick($event, item.menus)">{{ item.title }} v</span>
            </template>
          </a>
        </template>
      </div>

      <button
          class="<md:hidden font-medium flex flex-row items-center px-[10px] h-[40px] py-[20px] bg-white width-[136px] rounded-[6px] text-[#2368E1]">
        Open Account
      </button>

      <img @click="handleMenuClick" class="sm:block md:hidden cursor-pointer w-[25px]"
           src="/the-header/icons8-menu_rounded.png" alt="">

    </div>

    <sidebar :base-z-index="1000" position="full" v-model:visible="visible">
      <div class="w-screen min-h-screen bg-blue relative pt-[60px] pb-[70px] flex flex-col items-center">
        <template v-for="(item, index) of navs" :key="item.title">
          <a
              :class="[activeRouteIndex === index ? 'text-orange' : 'text-white']"
              class="text-[30px] pt-[57px]"
              :href="item.link"
          >
            {{ item.title }}
          </a>
        </template>

        <button
            class="mt-[60px] font-medium flex flex-row items-center px-[10px] h-[40px] py-[20px] bg-white width-[136px] rounded-[6px] text-[#2368E1]">
          Open Account
        </button>
      </div>
    </sidebar>

    <prime-menu class="mt-[20px]" :model="menus" popup ref="menuRef"/>

  </header>
</template>

<script lang="ts">
import { useMediaQuery } from "~/utils/shared";
import { reactive, defineComponent, computed, ref, nextTick } from "vue";
import { useRoute } from "vue-router";
import Sidebar from 'primevue/sidebar';
import Menu from 'primevue/menu';
import OverlayPanel from 'primevue/overlaypanel';

export default defineComponent({
  components: {
    Sidebar,
    "prime-menu": Menu,
    OverlayPanel
  },
  setup() {
    const mq = useMediaQuery()
    const navs = reactive([
      {title: "Home", linkKind: "link", link: "/"},
      {
        title: "Company", linkKind: "dropdown", link: "#",
        menus: [
          {label: "ABOUT US", url: "", icon: ""},
          {label: "FAQ", url: "", icon: ""},
          {label: "Contact us", url: "", icon: ""},
          {label: "Group tructure", url: "", icon: ""},
        ]
      },
      {title: "Download", linkKind: "link", link: "download"},
      {title: "Products", linkKind: "link", link: "products"},
      {title: "News", linkKind: "link", link: "news"},
    ])
    const visible = ref(false)

    const route = useRoute()

    const activeRouteIndex = computed(() => {
      const path = route.path
      if (path === "/" || path === "/index") {
        return 0
      }
      return 0
    })

    const handleMenuClick = () => {
      visible.value = !visible.value
    }

    const menuRef = ref(null)
    const menus = ref([])

    const onMenuClick = (event, newMenus) => {
      menus.value = newMenus
      nextTick(() => {
        menuRef.value.show(event)
      })
    }

    return {
      mq,
      navs,
      activeRouteIndex,
      handleMenuClick,
      visible,
      menus,
      onMenuClick,
      menuRef
    }
  }
})

</script>

<style lang="scss">
.p-sidebar-header {
  display: none;
}

.p-sidebar .p-sidebar-content {
  padding: 0;
}

</style>
