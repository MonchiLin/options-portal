<template>
  <the-part>
    <div
        class="
          <md:(flex-col)
          bottom-[80px] flex-row
          page-content flex text-white justify-between relative
        "
    >

      <div
          v-for="(item, index) of cardData"
          :key="index"
          class="<md:(w-full mt-[26px]) w-[30%] py-[35px] px-[24px] h-[266px]"
          :style="item.style"
          style="box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);"
      >
        <img class="w-[44px] h-[44px]" :src="item.icon" alt="">
        <p class="text-[24px] font-black mt-[10px]">{{ item.title }}</p>
        <p class="text-[14px] leading-[20px] mt-[10px]">{{ item.description }}</p>
      </div>
    </div>


  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {ThePart},
  setup() {
    const mq = useMediaQuery()
    const text = reactive({

    })

    const cardData = reactive([
      {
        title: "Integrity and Compliance",
        icon: "/company/aboutus/part2/Integrity.png",
        description: "We uphold the highest standards of regulation and compliance being regulated by the CySEC in the European Union and complying with ESMA regulations \n",
        style: {backgroundColor: "white", color: '#171648'}
      },
      {
        title: "Client-first approach",
        icon: "/company/aboutus/part2/Client.png",
        description: "SteadyTRADE FINANCE provides customers with professional and excellent customer service 24 hours a day 5 days and 24 hours a day service support from technical departments ",
        style: {backgroundColor: "white", color: '#171648'}
      },
      {
        title: "Fast Execution",
        icon: "/company/aboutus/part2/Execution.png",
        description: "SteadyTRADE FINANCE provides investors with education on trading strategies and financial markets to clients in need",
        style: {backgroundColor: "#EF7F3C", color: 'white'}
      },
    ])

    return {
      mq,
      text,
      cardData
    }
  }
})

</script>
