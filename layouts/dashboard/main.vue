<template>
<div :class="{'enlarge-menu': !isMobile && innerMenuIsClosed}">
  <!-- <old-sidebar :inner-menu-width="innerMenuWidth"></old-sidebar> -->
  <sidebar :inner-menu-width="innerMenuWidth"></sidebar>
  <topbar :inner-menu-width="innerMenuWidth"></topbar>
  <page-wrapper :inner-menu-width="innerMenuWidth">
    <template v-if="false">
      <div class="dashboard-loading-block">
        <div class="dashboard-loading spinner-grow spinner-grow text-primary" role="status"></div>
      </div>
    </template>
    <slot v-else ></slot>
  </page-wrapper>
</div>
</template>
<script>
import Sidebar from '../../components/dashboard/TheSidebar'
// import OldSidebar from '../../components/dashboard/OldSidebar'
import Topbar from '../../components/dashboard/TheTopbar'
import PageWrapper from '../../components/dashboard/ThePageWrapper'
import isMobile from '@/mixins/isMobileView'

export default {
  components: { Sidebar, Topbar, PageWrapper },
  mixins: [isMobile],
  computed: {
    innerMenuIsClosed() {
      return this.$store.getters['settings/innerMenuIsClosed']
    },
    userType() {
      return this.$store.getters.userType
    },
    organizeLoading() {
      return this.$store.getters['organizeItender/loading']
    }
  },
  data() {
    return {
      innerMenuWidth: '250px'
    }
  },
  created() {
    this.$store.dispatch('user/me')
    if(this.userType !== "USER"){
      this.$store.dispatch('user/getChild')
      this.$store.dispatch('user/getRoot')
      this.$store.dispatch('user/getGroup')
    } else {
      this.$store.dispatch('user/getMenuNotifications')
      this.$store.dispatch('user/getNotifications')
    }
  },
}
</script>
<style scoped>
.dashboard-loading-block{
  position: relative;
}
.dashboard-loading{
  position: absolute;
  top: 300px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
