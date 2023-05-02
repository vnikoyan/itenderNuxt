export default function ({ route, redirect }) {
      // Page not found
    if (route.matched.length === 0) {
      const url = process.env.VUE_MAIN_APP_URL + route.fullPath
      return redirect(url)
    }
  }