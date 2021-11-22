<template>
  <header
      class="bg-transparent absolute w-full flex flex-row justify-center"
      :class="[visible && '<md:bg-blue']"
  >
    <div
        class="page-content flex flex-row items-center <md:justify-between justify-center h-[72px]"
    >

      <div class="flex flex-row items-center">
        <img src="/the-header/logo.png" class="w-[28px] h-[28px]"/>
        <h1 class="pl-[12px] text-white">
          <a href="/">QIQUAN</a >
        </h1>
      </div>

      <div class="<md:hidden flex-1 flex flex-row items-center">
        <header-item
            v-for="(item, index) of navs"
            :key="item.title"
            :index="index"
            :active-route-index="activeRouteIndex"
            :item="item"
        />
      </div>

      <button
          class="<md:hidden font-medium flex flex-row items-center px-[10px] h-[40px] py-[20px] bg-white rounded-[6px] text-[#2368E1]">
        Open Account
      </button>

      <img @click="handleMenuClick" class="sm:block md:hidden cursor-pointer w-[25px]"
           src="/the-header/icons8-menu_rounded.png" alt="">

    </div>

    <sidebar :closable="false" position="top" v-model:visible="visible">
      <div class="w-full bg-blue h-[90vh]">
        <div class="flex flex-row items-center justify-center">
          <div
              class="page-content flex flex-row items-center justify-between h-[72px]"
          >
            <div class="flex flex-row items-center">
              <img src="/the-header/logo.png" class="w-[28px] h-[28px]"/>
              <h1 class="pl-[12px] text-white">
                <a href="/">QIQUAN</a>
              </h1>
            </div>
            <img @click="handleMenuClick" class="sm:block md:hidden cursor-pointer w-[25px]"
                 src="/the-header/icons8-menu_rounded.png" alt="">
          </div>
        </div>

        <div class="w-screen min-h-screen bg-blue relative flex flex-col items-center pt-[50px]">
          <header-item
              v-for="(item, index) of navs"
              :key="item.title"
              :index="index"
              :active-route-index="activeRouteIndex"
              :item="item"
          />

          <button
              class="mt-[t0px] font-medium flex flex-row items-center px-[10px] h-[40px] py-[20px] bg-white width-[136px] rounded-[6px] text-[#2368E1]">
            Open Account
          </button>
        </div>
      </div>
    </sidebar>

  </header>
</template>

<script lang="ts">
import { useMediaQuery } from "~/utils/shared";
import { computed, defineComponent, nextTick, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import OverlayPanel from 'primevue/overlaypanel';
import Sidebar from 'primevue/sidebar';
import IosArrowDownIcon from 'vue-ionicons/dist/ios-arrow-down.vue'
import HeaderItem from "~/components/the-header/header-item.vue";

export default defineComponent({
  components: {
    HeaderItem,
    OverlayPanel,
    IosArrowDownIcon,
    Sidebar
  },
  setup() {
    const mq = useMediaQuery()
    const navs = reactive([
      {title: "Home", linkKind: "link", link: "/"},
      {
        title: "Company", linkKind: "dropdown", link: "/company",
        menus: [
          {label: "ABOUT US", href: "/company/aboutus", isActive: s => s.includes("aboutus")},
          {label: "FAQ", href: "/company/faq", isActive: s => s.includes("faq")},
          {label: "Contact US", href: "/company/contractus", isActive: s => s.includes("contractus")},
          {label: "Group Tructure", href: "/company/groupstructure", isActive: s => s.includes("groupstructure")},
        ]
      },
      {title: "Download", linkKind: "link", link: "/download"},
      {title: "Products", linkKind: "link", link: "/products"},
      {title: "News", linkKind: "link", link: "/news"},
    ])
    const visible = ref(false)

    const route = useRoute()

    const activeRouteIndex = computed(() => {
      const path = route.path
      if (path === "/" || path === "/index") {
        return 0
      }
      if (path.includes("company")) {
        return 1
      }
      if (path.includes("download")) {
        return 2
      }
      if (path.includes("products")) {
        return 3
      }
      if (path.includes("news")) {
        return 4
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
      console.log(event)
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

//.p-sidebar.p-sidebar-full {
//  height: 100vh;
//  background: rgba(0, 0, 0, 0.3);
//}

.p-sidebar-top {
  height: 90vh;
}

</style>
