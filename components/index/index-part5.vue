<template>
  <the-part
      background-for-md="/index/part5/background_mobile.png"
      background="/index/part5/background.png"
  >
    <div
        class="
          <md:(h-auto py-[23px])
          h-[900px] py-[30px]
          flex items-center page-content flex-col
        "
    >

      <p class="<md:(text-[20px]) text-[35px] font-black text-white">
        {{ text.t1 }}
      </p>

      <p class="<md:(text-[14px]) text-[18px] pt-[18px] text-white">
        {{ text.t2 }}
      </p>

      <part5-card-box class="mt-[30px]" :configs="cardData"/>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ApiWrap, BASE_URL, useMediaQuery } from "~/utils/shared";
import { reactive, ref } from "vue";
import ThePart from "~/components/the-part.vue";
import Part5Card from "~/components/index/part5/part5-card.vue";
import Part5CardBox from "~/components/index/part5/part5-card-box.vue";
import Pagintion from "~/components/pagintion.vue";
import { useFetch } from "#app";
import cloneDeep from "lodash-es/cloneDeep";

type DataType = {
  id: number
  siteId: number
  productName: string
  productDesc: string
  productInfo: string
  profitRate: number
  img: string
  req: number
  productType: string
  productStatus: string
  limitMin: number
  limitMax: number
  discountRate: number
  day: number
  curreny: string
  addTime: number
  guaranteeAgency: string
  custodianBank: string
  regulatoryAgency: string
}

const defaultData = {
  annualEarnings: 108,
  t1: "Annual earnings 108.00%+",
  t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
  descriptions: [
    "Free experience",
    "Experience period of funds: 4 days",
    "Buy today, pay tomorrow (first profit)",
    "All revenue goes to the user"
  ]
}

export default defineComponent({
  components: {
    Pagintion,
    Part5CardBox,
    Part5Card,
    ThePart
  },
  async setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Popular financial products",
      t2: "Partners for wealth creation",
    })

    const cardData = ref([
      // 示例数据
      // {
      //   annualEarnings: 108,
      //   t1: "Annual earnings 108.00%+",
      //   t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
      //   descriptions: [
      //     "Free experience",
      //     "Experience period of funds: 4 days",
      //     "Buy today, pay tomorrow (first profit)",
      //     "All revenue goes to the user"
      //   ]
      // },
      // {
      //   annualEarnings: 84,
      //   t1: "Annual earnings 108.00%+",
      //   t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
      //   descriptions: [
      //     "Start at Rs 30,000",
      //     "The lockup period is 1 month",
      //     "Buy today, pay tomorrow (first profit)",
      //     "Risk type: Low risk"
      //   ]
      // },
      // {
      //   annualEarnings: 84,
      //   t1: "Annual earnings 108.00%+",
      //   t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
      //   descriptions: [
      //     "Start at Rs 30,000",
      //     "The lockup period is 1 month",
      //     "Buy today, pay tomorrow (first profit)",
      //     "Risk type: Low risk"
      //   ]
      // }
    ])


    const api = BASE_URL + '/api/investment/productList'
    const {data: res} = await useFetch<string, ApiWrap<DataType[]>>(api)
    const data = res.value?.data ?? []
    cardData.value = data.map((i: DataType) => {
      const profitRate = i.profitRate * 100
      const item = cloneDeep(defaultData)
      item.annualEarnings = profitRate
      item.t1 = `Annual earnings ${profitRate}%+`
      item.t2 = i.productDesc
      item.descriptions[0] = `Start at Rs ${i.limitMin}`
      item.descriptions[1] = `The lockup period is ${i.day} day`
      return item
    })

    return {
      mq,
      text,
      cardData
    }
  }
})

</script>

<style lang="scss">

</style>

