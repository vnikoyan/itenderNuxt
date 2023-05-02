export default {
    data() {
        return {
            isMobile: this.isMobileView(),
        }
    },
    // created() {
    //     window.addEventListener("resize", this.screenWidth);
    // },
    // mounted () {
    //     this.screenWidth()
    // },
    // destroyed() {
    //     window.removeEventListener("resize", this.screenWidth);
    // },
	methods: {
        isMobileView() {
            // console.log(this)
                // if (screen.width <= 760) {
                //     return true
                // } else {
                //     return false
                // }
        },
    }
}