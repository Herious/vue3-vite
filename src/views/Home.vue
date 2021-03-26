<template>
  <LeftNavMenu></LeftNavMenu>
</template>
<script>
  import LeftNavMenu from '../components/homepage/LeftNavMenu.vue'

  export default {
		components: { LeftNavMenu },
    data() {
      return {
        activeName: 'first',
        teamShow: false
      };
    },
    methods: {
      handleClick(tab, event) {
        if (this.activeName == 'three') {
          this.teamShow = true;
        } else {
          this.teamShow = false;
        }
      },
    }
  };
</script>
