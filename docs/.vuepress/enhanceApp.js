
import sssui from "sss-ui"

export default ({ Vue }) => {
  Vue.mixin({
    mounted() {
      Vue.use(sssui)
    },
  });
};