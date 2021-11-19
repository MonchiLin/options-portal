import { onMounted, reactive } from "vue";
import { debounce } from "lodash-es";

export const useMediaQuery = () => {
  const matches = reactive({
    mobile: false,
    desktop: false
  });

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
  }

  onMounted(() => {
    listen()
  });

  return matches;
}
