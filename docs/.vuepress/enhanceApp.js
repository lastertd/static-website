
import sssui from "sss-ui"

export default async ({
  Vue,
}) => {
  if (typeof process === 'undefined') {

    Vue.use(sssui)

  }
}