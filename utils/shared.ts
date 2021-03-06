import { onMounted, reactive } from "vue";
import { debounce } from "lodash-es";

const matches = reactive({
  mobile: false,
  desktop: false
});
const URL = "https://oapi.payeres.com";
const listen = () => {
  const mobile = window.matchMedia('screen and (max-width: 575px)');
  const desktop = window.matchMedia('screen and (min-width: 576px)');
  // const checkTablet = window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)');
  // const desktop = window.matchMedia('screen and (min-width: 992px)');

  const update = debounce(() => {
    if (mobile.matches) {
      console.log("target => ", "mobile")
      matches.mobile = true
      matches.desktop = false
    } else if (desktop.matches) {
      console.log("target => ", "desktop")
      matches.mobile = false
      matches.desktop = true
    }
  }, 100)

  update()

  mobile.addEventListener("change", (e) => {
    update()
  });

  desktop.addEventListener("change", (e) => {
    update()
  });

  listened = true
}

let listened = false

export const useMediaQuery = () => {

  onMounted(() => {
    !listened && listen()
  });

  return matches;
}

export type ApiWrap<T> = {
  data: T
  errCode: string
  errMsg: string
  success: boolean
  sysTime: number
}
export const publicMethod = {
  getSiteInfo: async function () {
    const api = URL + "/api/home/siteInfo";
   
    const response = await fetch(api);
    const data=await response.json();
    return data.data;
  }
}
export const BASE_URL=URL;
