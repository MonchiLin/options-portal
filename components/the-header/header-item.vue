<template>
  <div
      class="
        <md:(text-[24px] pb-[40px])
        flex flex-row items-center justify-center <md:(w-full pl-0) pl-[32px]
      "
      :class="[activeRouteIndex === index ? 'text-orange' : 'text-white']"
  >
    <a :href="item.link" v-if="item.linkKind === 'link'">
      {{ item.title }}
    </a>

    <div v-else-if="item.linkKind === 'dropdown'">
      <div @click="toggle" class="flex flex-row items-center">
        <span>{{ item.title }}</span>
        <ios-arrow-down-icon class="mt-[5px]" :style="{fill: activeRouteIndex === index ? '#EF7F3C' : 'white'}"/>
      </div>
    </div>

    <OverlayPanel ref="op">
      <div class="flex flex-col px-[10px] py-[10px]">
        <a
            class="pb-[10px] h-[30px] hover:text-orange"
            :class="[menu.isActive(route.path) && 'text-orange']"
            :href="menu.href" v-for="menu of item.menus" :key="item.label"
        >
          {{ menu.label }}
        </a>
      </div>
    </OverlayPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IosArrowDownIcon from 'vue-ionicons/dist/ios-arrow-down.vue'
import Menu from 'primevue/menu';
import OverlayPanel from 'primevue/overlaypanel';
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    IosArrowDownIcon,
    Menu,
    OverlayPanel
  },
  props: {
    item: Object,
    activeRouteIndex: Number,
    index: Number
  },
  setup() {
    const op = ref(null)
    const visible = ref(false)
    const route = useRoute();

    const toggle = (event) => {
      op.value.toggle(event);
    }

    return {
      op,
      visible,
      toggle,
      route
    }
  }
})

</script>

<style lang="scss">
.p-overlaypanel .p-overlaypanel-content {
  padding: 0;
}

</style>
