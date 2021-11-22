<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(py-[30px])
          py-[60px]
          flex items-center page-content flex-col company-faq
        "
    >

      <tab-bar
          :items="tabItems"
          v-model:index="tabIndex"
          tabbar-class="bg-[#F8F8FA]"
          tabbar-item-class="w-[190px] text-[14px] leading-[24px] text-center <md:(w-[100%] leading-[16px])"
          tabbar-item-active-class="text-[secondary] active-tabbar-item"
          tabbar-item-un-active-class="text-[secondary] opacity-50"
      />

      <div class="pt-[20px]"/>
      <prime-panel
          class="
              <md:()
              pt-[10px] w-full
            "
          :toggleable="true"
          v-model:collapsed="collapseds[index]"
          v-for="(item, index) of tabDetail"
          :key="index"
      >
        <template #header>
          <div
              @click="toggle(index)"
              class="flex-row flex items-center justify-between w-full h-[70px] px-[30px] <md:(px-[10px])"
          >
            <span
                class="font-medium text-secondary text-[17px] leading-[35px] <md:(text-[14px] leading-[20px])">
              {{ item.title }}
            </span>
            <div
                class="w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
              <ios-arrow-down-icon
                  class="transform transition duration-500"
                  :class="[!collapseds[index] && 'rotate-180']"
              />
            </div>
          </div>
        </template>

        <div class="opacity-70 text-primary">
          {{ item.description }}
        </div>

      </prime-panel>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { computed, reactive, ref, watch } from "vue";
import ThePart from "~/components/the-part.vue";
import TabBar from "~/components/tab-bar.vue";
import IosArrowUpIcon from 'vue-ionicons/dist/ios-arrow-up.vue'
import IosArrowDownIcon from 'vue-ionicons/dist/ios-arrow-down.vue'

export default defineComponent({
  components: {
    TabBar,
    ThePart,
    IosArrowUpIcon,
    IosArrowDownIcon
  },
  setup() {
    const mq = useMediaQuery()
    const tabIndex = ref(0)
    const tabItems = computed(() => {
      return [
        "Supporting Documents",
        "Trading Accounts",
        mq.mobile ? "Deposits/ Withdrawals" : "Deposits/Withdrawals",
        "Trading Platforms",
      ]
    })

    const tabDetails = reactive([
      [
        {
          title: "How much does it cost to be a credit card merchant?",
          description: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
        },
        {
          title: "How can I open a merchant account?",
          description: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
        },
        {
          title: "How long does the application take?",
          description: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
        },
        {
          title: "Can I make payment outside of Hong Kong?",
          description: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
        },
        {
          title: "How do I get the payment complete?",
          description: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
        },
      ]
    ])

    const tabDetail = computed(() => tabDetails[tabIndex.value] || [])

    const collapseds = ref<Record<string, boolean>>({})

    watch(tabIndex, () => {
      collapseds.value = tabDetail.value.reduce((p, c, i) => {
        return {...p, [i]: true}
      }, {})
    }, {immediate: true})


    const toggle = (index) => {
      const value = !collapseds.value[index]
      Object.keys(collapseds.value).forEach(key => {
        collapseds.value[index] = true
      })
      collapseds.value[index] = value
    }

    return {
      mq,
      tabIndex,
      tabDetail,
      tabItems,
      tabDetails,
      collapseds,
      toggle,
    }
  }
})

</script>

<style lang="scss">

.company-faq {

  .active-tabbar-item {
    box-shadow: 0px 4px 4px rgba(59, 79, 109, 0.08);
  }

  .p-panel .p-panel-header {
    padding: 0;
    background-color: transparent;
  }

  .p-panel-icons {
    display: none;
  }
}

</style>

