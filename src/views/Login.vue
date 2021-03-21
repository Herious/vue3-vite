<template>
    <div> 123 </div>
</template>

<script>

import { _hello } from '../api/user/index'
export default {
 created() {
  console.log(this.$store.state.count);
  this.$store.commit('increment');
  console.log(this.$store.state.count);
  _hello().then(res => {
    console.log(res)
  })
 }
}
</script>

<style>

</style>
